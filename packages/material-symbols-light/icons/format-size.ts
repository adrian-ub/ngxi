import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatSizeIcon],svg[material-symbols-light-format-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.827 19V6.25H9.904V5H21v1.25h-4.923V19zm-8.865 0v-7.846H3v-1.25h7.154v1.25H7.192V19z"></svg:path>`,
})
export class MaterialSymbolsLightFormatSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
