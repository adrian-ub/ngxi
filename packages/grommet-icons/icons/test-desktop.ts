import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTestDesktopIcon],svg[grommet-icons-test-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18.218 1H23v18H1V1h5m11 9c-4-3-6 3-10 0M5 23h14zm5-22v4.773l-5 7.182V15h14v-2.045l-5-7.182V1M8 1h8zm0 22h8v-4H8z"></svg:path>`,
})
export class GrommetIconsTestDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
