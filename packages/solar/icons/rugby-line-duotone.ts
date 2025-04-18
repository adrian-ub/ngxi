import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRugbyLineDuotoneIcon],svg[solar-rugby-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.457 2.11c-2.883.277-5.948 1.142-8.076 3.27c-2.13 2.13-2.994 5.194-3.271 8.077M13.457 2.11c1.67-.16 3.28-.125 4.612-.023a4.136 4.136 0 0 1 3.844 3.844a27 27 0 0 1-.023 4.612M13.457 2.11l8.433 8.433m0 0c-.277 2.883-1.142 5.948-3.27 8.076c-2.13 2.13-5.194 2.994-8.077 3.271m0 0c-1.67.16-3.28.125-4.612.023a4.136 4.136 0 0 1-3.844-3.844a27 27 0 0 1 .023-4.612m8.433 8.433L2.11 13.457"></svg:path><svg:path d="m15.31 8.69l-6.62 6.62m0-2.837l2.837 2.837m-.945-4.728l2.836 2.836m-.945-4.728l2.837 2.837" opacity=".5"></svg:path></svg:g>`,
})
export class SolarRugbyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
