import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatWrapTopBottomIcon],svg[mdi-light-format-wrap-top-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 8l4.5 9H7zm0 2.24L8.62 16h5.76zM3 4h17v1H3zm17 16v1H3v-1z"></svg:path>`,
})
export class MdiLightFormatWrapTopBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
