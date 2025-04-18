import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBasketballIcon],svg[lucide-lab-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M2.1 13.4A10.1 10.1 0 0 0 13.4 2.1M5 4.9l14 14.2m2.9-8.5a10.1 10.1 0 0 0-11.3 11.3"></svg:path></svg:g>`,
})
export class LucideLabBasketballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
