import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfHighBatteryIcon],svg[wpf-high-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5C3.3 5 2 6.3 2 8v1H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h1v1c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm0 2h1v12H5c-.6 0-1-.4-1-1v-3H2v-4h2V8c0-.6.4-1 1-1"></svg:path>`,
})
export class WpfHighBatteryIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
