import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaAirplayIcon],svg[gala-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:path d="M 64,192 H 47.999992 m 0,0 c -17.728,0 -32,-14.272 -32,-32 V 47.999993 c 0,-17.728 14.272,-32 32,-32 H 208.00001 c 17.728,0 32,14.272 32,32 V 160 c 0,17.728 -14.272,32 -32,32"></svg:path><svg:path d="m 64,240 64,-80 64,80 z"></svg:path><svg:path d="M 208,192 H 192"></svg:path></svg:g>`,
})
export class GalaAirplayIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
