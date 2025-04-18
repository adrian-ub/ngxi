import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBiomassEnergyIcon],svg[hugeicons-biomass-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 14.499C20 18.642 16.418 22 12 22s-8-3.358-8-7.501v-.22c0-.734 0-1.101.254-1.236C4.804 12.752 6 14 6 14M4 9.501C4 5.358 7.582 2 12 2s8 3.358 8 7.501v.22c0 .734 0 1.101-.254 1.236C19.196 11.248 18 10 18 10"></svg:path><svg:path d="M11.98 11.16c-.72 1.424-1.245 3.733-.418 6.34m-.419-2.472c-4.246-3.02-1.329-6.494 1.417-8.248c.331-.211.497-.317.69-.268c.193.05.286.222.47.568c1.542 2.877 2.647 7.41-2.577 7.948"></svg:path></svg:g>`,
})
export class HugeiconsBiomassEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
