import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBellElectricIcon],svg[lucide-bell-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.518 17.347A7 7 0 0 1 14 19m4.8-15A11 11 0 0 1 20 9M9 9h.01"></svg:path><svg:circle cx="20" cy="16" r="2"></svg:circle><svg:circle cx="9" cy="9" r="7"></svg:circle><svg:rect width="10" height="6" x="4" y="16" rx="2"></svg:rect></svg:g>`,
})
export class LucideBellElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
