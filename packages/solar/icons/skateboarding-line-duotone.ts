import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingLineDuotoneIcon],svg[solar-skateboarding-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 17l1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17"></svg:path><svg:circle cx="7" cy="21" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="17" cy="21" r="1" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="19" cy="4" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118l.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSkateboardingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
