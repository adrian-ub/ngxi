import { names, Tree } from "@nx/devkit";
import { IconLibraryGeneratorSchema } from "../schema";
import * as ts from 'typescript';

export function addIconSet(tree: Tree, schema: IconLibraryGeneratorSchema) {
  const filePath = 'tools/workspace-plugin/src/generators/svg-to-ts/iconsets.ts';
  const fileContent = tree.read(filePath, 'utf-8');

  if (!fileContent) {
    throw new Error(`No se pudo leer el archivo ${filePath}`);
  }

  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent,
    ts.ScriptTarget.Latest,
    true
  );

  const fileObject = ts.factory.createObjectLiteralExpression([
    ts.factory.createPropertyAssignment('input', ts.factory.createStringLiteral(schema.input)),
    ts.factory.createPropertyAssignment('output', ts.factory.createStringLiteral(schema.output)),
    ts.factory.createPropertyAssignment('glob', ts.factory.createStringLiteral(schema.glob)),
    ts.factory.createPropertyAssignment(
      'getIconName',
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [ts.factory.createParameterDeclaration(
          undefined,
          undefined,
          ts.factory.createIdentifier('name'),
          undefined,
          undefined,
          undefined
        )],
        undefined,
        ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        ts.factory.createTemplateExpression(
          ts.factory.createTemplateHead('', ''),
          [ts.factory.createTemplateSpan(
            ts.factory.createIdentifier('name'),
            ts.factory.createTemplateTail('', '')
          )]
        )
      )
    )
  ], true);

  const filesArray = ts.factory.createArrayLiteralExpression([fileObject], true);

  const newIconsetProps = [
    ts.factory.createPropertyAssignment(
      'internalPackageName',
      ts.factory.createStringLiteral(names(schema.name).fileName)
    ),
    ts.factory.createPropertyAssignment('files', filesArray)
  ];

  const newIconset = ts.factory.createObjectLiteralExpression(newIconsetProps, true);

  let iconsetArray: ts.ArrayLiteralExpression | null = null;

  const visit = (node: ts.Node) => {
    if (ts.isVariableDeclaration(node) &&
      node.name.getText() === 'iconsets' &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)) {
      iconsetArray = node.initializer;
    }
    ts.forEachChild(node, visit);
  };

  ts.forEachChild(sourceFile, visit);

  if (!iconsetArray) {
    throw new Error('No se encontró el array de iconsets');
  }

  const existingElements = [...iconsetArray.elements];
  const newElements = [...existingElements, newIconset];

  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const updatedArray = ts.factory.createArrayLiteralExpression(newElements, true);

  const start = iconsetArray.getStart();
  const end = iconsetArray.getEnd();

  const newArrayText = printer.printNode(
    ts.EmitHint.Unspecified,
    updatedArray,
    sourceFile
  );

  const updatedContent =
    fileContent.substring(0, start) +
    newArrayText +
    fileContent.substring(end);

  tree.write(filePath, updatedContent);
}
