import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExtensionSharpIcon],svg[material-symbols-light-extension-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.954 20H4v-4.954q.854-.25 1.427-.945T6 12.5t-.573-1.601T4 9.954V5h5q.27-.858.946-1.371q.677-.514 1.554-.514t1.554.514T14 5h5v5q.858.27 1.371.946q.514.677.514 1.554t-.514 1.554T19 15v5h-4.954q-.269-.904-.97-1.452T11.5 18t-1.576.548T8.954 20"></svg:path>`,
})
export class MaterialSymbolsLightExtensionSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
