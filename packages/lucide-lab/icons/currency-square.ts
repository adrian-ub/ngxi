import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCurrencySquareIcon],svg[lucide-lab-currency-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="m17 7l-2.17 2.17M17 17l-2.17-2.17M7 17l2.17-2.17M7 7l2.17 2.17"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle></svg:g>`,
})
export class LucideLabCurrencySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
