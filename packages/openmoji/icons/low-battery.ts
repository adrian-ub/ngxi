import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLowBatteryIcon],svg[openmoji-low-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M60.814 42.802a1.04 1.04 0 0 1 1.034-1.042h4.285v-9.573h-4.285a1.04 1.04 0 0 1-1.034-1.042m0 0v-7.463H5.677v26.074h55.137v-6.954"></svg:path><svg:path fill="#d22f27" d="M11.501 45.784h9.119V27.771h-9.119Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M61.081 31.348v-7.16a1 1 0 0 0-1-1H6.772a1 1 0 0 0-1 1v25.017a1 1 0 0 0 1 1h53.313a1 1 0 0 0 1-1V42.53h5.143V31.347Z"></svg:path><svg:path d="M11 27.36h10.121v19.007H11z"></svg:path></svg:g>`,
})
export class OpenmojiLowBatteryIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
