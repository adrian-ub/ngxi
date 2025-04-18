import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExtensionOffSharpIcon],svg[material-symbols-light-extension-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-4.954q.854-.25 1.427-.945T6 12.5t-.573-1.601T4 9.954V4.808L19.192 20h-5.146q-.25-.854-.945-1.427T11.5 18t-1.601.573T8.954 20zm15-3.812L7.811 5H9q.27-.858.946-1.371q.677-.514 1.554-.514t1.554.514T14 5h5v5q.858.27 1.371.946q.514.677.514 1.554t-.514 1.554T19 15zm.833 5.071L2.74 4.168l.713-.713l17.092 17.092z"></svg:path>`,
})
export class MaterialSymbolsLightExtensionOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
