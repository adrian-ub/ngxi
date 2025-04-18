import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCarFrontIcon],svg[lucide-car-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m21 8l-2 2l-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10L3 8m4 6h.01M17 14h.01"></svg:path><svg:rect width="18" height="8" x="3" y="10" rx="2"></svg:rect><svg:path d="M5 18v2m14-2v2"></svg:path></svg:g>`,
})
export class LucideCarFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
