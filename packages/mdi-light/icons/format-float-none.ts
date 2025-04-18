import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatFloatNoneIcon],svg[mdi-light-format-float-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h17v1H3zm9 9v-1h8v1zM3 7h7v7H3zm1 1v5h5V8zm-1 8h13v1H3zm0 4h17v1H3z"></svg:path>`,
})
export class MdiLightFormatFloatNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
