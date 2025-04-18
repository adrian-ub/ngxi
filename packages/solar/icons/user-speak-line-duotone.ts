import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserSpeakLineDuotoneIcon],svg[solar-user-speak-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="10" cy="6" r="4"></svg:circle><svg:path d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 2s2 1.2 2 4s-2 4-2 4m-2-6s1 .6 1 2s-1 2-1 2"></svg:path></svg:g>`,
})
export class SolarUserSpeakLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
