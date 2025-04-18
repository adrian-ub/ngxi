import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWysiwygSharpIcon],svg[material-symbols-light-wysiwyg-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14V7H5zm2-7.5v-1h10v1zm0 4v-1h6v1z"></svg:path>`,
})
export class MaterialSymbolsLightWysiwygSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
