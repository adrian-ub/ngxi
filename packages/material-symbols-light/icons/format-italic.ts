import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatItalicIcon],svg[material-symbols-light-format-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.789 18.25v-1.115h3.634l3.48-10.27H9.27V5.75h8.308v1.116h-3.52l-3.48 10.269h3.52v1.115z"></svg:path>`,
})
export class MaterialSymbolsLightFormatItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
