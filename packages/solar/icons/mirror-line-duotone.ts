import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLineDuotoneIcon],svg[solar-mirror-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2"></svg:path><svg:path d="M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5S8.686 2 12 2s6 3.358 6 7.5Z"></svg:path><svg:path d="M5 20h14" opacity=".4"></svg:path><svg:path stroke-linecap="round" d="M13 5.256c.96.51 1.697 1.732 1.926 3.244" opacity=".4"></svg:path></svg:g>`,
})
export class SolarMirrorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
