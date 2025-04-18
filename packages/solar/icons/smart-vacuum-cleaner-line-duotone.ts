import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerLineDuotoneIcon],svg[solar-smart-vacuum-cleaner-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M15 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path d="M16.5 20.736a3 3 0 0 0 4.236-4.236M7.5 20.736A3 3 0 0 1 3.264 16.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleanerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
