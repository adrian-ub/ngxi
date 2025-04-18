import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBitcoinIcon],svg[streamline-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.79 6.45A2.23 2.23 0 0 0 7.83 2H4.39a.81.81 0 0 0-.81.81v8.09a.81.81 0 0 0 .81.81h3.4a2.63 2.63 0 0 0 0-5.26M5.13 2V.5M7.63 2V.5m-2.5 13v-1.79m2.5 1.79v-1.79m.2-5.26H3.58"></svg:path>`,
})
export class StreamlineBitcoinIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
