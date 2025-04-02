export interface IconLibraryGeneratorSchema {
  name: string;
  internalPackageName: string;
  input: string;
  output: string;
  glob: string;
  prefix?: string;
  suffix?: string;
}
