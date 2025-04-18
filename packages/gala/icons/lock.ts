import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaLockIcon],svg[gala-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 48.003124,207.99947 V 144.00668"></svg:path><svg:path d="M 208.00205,207.99948 V 143.99989"></svg:path><svg:path d="M 80.002888,239.99926 H 176.00225"></svg:path><svg:path d="m 208.00205,207.99948 a 31.999787,31.999787 0 0 1 -31.9998,31.99978"></svg:path><svg:path d="m 48.003124,207.99948 a 31.999787,31.999787 0 0 0 31.999764,31.99978"></svg:path><svg:path d="m 128.00258,207.99949 v -31.9998"></svg:path><svg:path d="M 47.996095,144.00668 A 15.999894,15.999894 0 0 1 63.995976,128.0068"></svg:path><svg:path d="M 208.00205,143.99989 A 15.999894,15.999894 0 0 0 192.00218,128"></svg:path><svg:path d="M 176.00225,64.00042 A 47.999683,47.999683 0 0 0 128.00258,16.00074"></svg:path><svg:path d="M 80.002812,64.00042 A 47.999683,47.999683 0 0 1 128.00249,16.00074"></svg:path><svg:path d="M 80.002888,128 V 63.907475"></svg:path><svg:path d="M 176.00225,64.000424 V 128"></svg:path><svg:path d="M 64.003006,128 H 192.00218"></svg:path></svg:g>`,
})
export class GalaLockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
