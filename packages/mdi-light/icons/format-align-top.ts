import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatAlignTopIcon],svg[mdi-light-format-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v1H3zm0 4h13v1H3zm8 13v-8.25L7.75 16L7 15.34l4.5-4.5l4.5 4.5l-.75.66L12 12.75V21z"></svg:path>`,
})
export class MdiLightFormatAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
