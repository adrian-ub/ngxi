import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFormatIndentIncreaseIcon],svg[mdi-light-format-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-1h17v1zm8-4v-1h9v1zm0-4v-1h9v1zm0-4V8h9v1zM3 5V4h17v1zm5.5 7.5L3 18V7zm-1.41 0L4 9.41v6.18z"></svg:path>`,
})
export class MdiLightFormatIndentIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
