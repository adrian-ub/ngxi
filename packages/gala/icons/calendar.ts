import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaCalendarIcon],svg[gala-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="16"><svg:path d="M 31.999978,31.999961 H 224.00004"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 15.999975,47.999965 -3e-6,176.000055"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 240.00002,47.999965 V 224.00002"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 31.999978,31.999961 c -8.836576,0 -16.000003,7.163446 -16.000003,16.000004"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 224.00004,31.999961 c 8.83657,-4e-6 15.99998,7.163443 15.99998,16.000004"></svg:path><svg:path d="M 224.00004,240.00002 H 31.999978"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 224.00004,240.00002 a 16.000004,16.000004 0 0 0 15.99998,-16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m 31.999978,240.00002 a 16.000004,16.000004 0 0 1 -16.000011,-16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 128.00001,47.999965 V 15.999962"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 160.00003,47.999965 V 15.999962"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 192.00002,47.999965 V 15.999962"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 95.999985,47.999965 V 15.999962"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 64.000001,47.999965 V 15.999962"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M 15.999975,95.999972 H 240.00002"></svg:path></svg:g>`,
})
export class GalaCalendarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
