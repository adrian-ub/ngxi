import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChecklistLineDuotoneIcon],svg[solar-checklist-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2 5.5L3.214 7L7.5 3"></svg:path><svg:path stroke-linejoin="round" d="M2 12.5L3.214 14L7.5 10" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M2 19.5L3.214 21L7.5 17"></svg:path><svg:path d="M22 19H12"></svg:path><svg:path d="M22 12H12" opacity=".5"></svg:path><svg:path d="M22 5H12"></svg:path></svg:g>`,
})
export class SolarChecklistLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
