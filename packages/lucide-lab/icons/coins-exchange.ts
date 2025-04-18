import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCoinsExchangeIcon],svg[lucide-lab-coins-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 10V5c0-1.7 1.3-3 3-3h1"></svg:path><svg:path d="m3 7l3 3l3-3"></svg:path><svg:circle cx="18" cy="6" r="4"></svg:circle><svg:path d="M18 14v5c0 1.7-1.3 3-3 3h-1"></svg:path><svg:path d="m21 17l-3-3l-3 3"></svg:path><svg:circle cx="6" cy="18" r="4"></svg:circle></svg:g>`,
})
export class LucideLabCoinsExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
