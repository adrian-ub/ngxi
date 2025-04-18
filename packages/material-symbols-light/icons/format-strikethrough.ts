import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatStrikethroughIcon],svg[material-symbols-light-format-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13.48v-1h18v1zm8.385-2.96V6.25H6.019V5H18v1.25h-5.365v4.27zm0 8.48v-3.558h1.25V19z"></svg:path>`,
})
export class MaterialSymbolsLightFormatStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
