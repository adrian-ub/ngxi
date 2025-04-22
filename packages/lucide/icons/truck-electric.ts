import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTruckElectricIcon],svg[lucide-truck-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 19V7a2 2 0 0 0-2-2H9m6 14H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14M2 13v5a1 1 0 0 0 1 1h2M4 3L2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"></svg:path><svg:circle cx="17" cy="19" r="2"></svg:circle><svg:circle cx="7" cy="19" r="2"></svg:circle></svg:g>`,
})
export class LucideTruckElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
