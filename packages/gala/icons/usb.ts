import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaUsbIcon],svg[gala-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 48.042103,208.01896 V 112.07317"></svg:path><svg:path d="M 207.96306,208.01897 V 112.06638"></svg:path><svg:path d="M 80.026346,240.00316 H 175.97888"></svg:path><svg:path d="m 207.96306,208.01897 a 31.98419,31.98419 0 0 1 -31.98418,31.98419"></svg:path><svg:path d="m 48.042103,208.01897 a 31.98419,31.98419 0 0 0 31.984243,31.98419"></svg:path><svg:path d="M 48.035077,112.07316 A 15.992095,15.992095 0 0 1 64.027161,96.081066"></svg:path><svg:path d="M 207.96306,112.06637 A 15.992095,15.992095 0 0 0 191.97096,96.074276"></svg:path><svg:path d="M 64.034224,96.074284 H 191.97096"></svg:path><svg:path d="M 80.026346,32.112684 C 80.026347,23.280513 87.167829,16.000027 96,16"></svg:path><svg:path d="M 175.97888,32.105897 C 175.97888,23.273697 168.8322,15.999986 160,16"></svg:path><svg:path d="M 96.018393,16 H 160"></svg:path><svg:path d="M 80.026346,32.105904 V 96.074281"></svg:path><svg:path d="M 175.97888,32.105904 V 96.074281"></svg:path><svg:path d="m 112.01048,16.113809 0,31.984193"></svg:path><svg:path d="M 143.99468,16.113809 V 48.098002"></svg:path></svg:g>`,
})
export class GalaUsbIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
