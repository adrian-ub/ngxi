import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaSettingsIcon],svg[gala-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 48.000002,16 H 208 c 17.728,0 32,14.272 32,32 v 160 c 0,17.728 -14.272,32 -32,32 H 48.000002 c -17.728,0 -32,-14.272 -32,-32 V 48 c 0,-17.728 14.272,-32 32,-32 z"></svg:path><svg:path d="M 64.000006,64.000001 H 79.999993"></svg:path><svg:path d="m 79.999996,-96.000015 a 16,16 0 0 1 -16,16 16,16 0 0 1 -16,-16 16,16 0 0 1 16,-16.000005 16,16 0 0 1 16,16.000005 z" transform="rotate(90)"></svg:path><svg:path d="m 112.00001,64.000353 79.99997,-3.52e-4"></svg:path><svg:path d="M 191.99998,128 H 176"></svg:path><svg:path d="m 144,159.99997 a 16,16 0 0 1 -16,16 16,16 0 0 1 -16,-16 16,16 0 0 1 16,-16 16,16 0 0 1 16,16 z" transform="matrix(0 1 1 0 0 0)"></svg:path><svg:path d="M 143.99998,128.00035 64.000006,128"></svg:path><svg:path d="M 64.000006,192.00001 H 79.999993"></svg:path><svg:path d="m 208,-96.000015 a 16,16 0 0 1 -16,16 16,16 0 0 1 -16,-16 16,16 0 0 1 16,-16.000005 16,16 0 0 1 16,16.000005 z" transform="rotate(90)"></svg:path><svg:path d="m 112.00001,192.00036 79.99997,-3.5e-4"></svg:path></svg:g>`,
})
export class GalaSettingsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
