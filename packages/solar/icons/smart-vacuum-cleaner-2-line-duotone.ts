import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2LineDuotoneIcon],svg[solar-smart-vacuum-cleaner-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z"></svg:path><svg:path d="M15 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke-linecap="round" d="M12 18v-2M2 22l2.5-2.5M22 22l-2.5-2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSmartVacuumCleaner2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
