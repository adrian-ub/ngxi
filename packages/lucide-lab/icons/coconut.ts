import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCoconutIcon],svg[lucide-lab-coconut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:ellipse cx="12" cy="9" rx="10" ry="7"></svg:ellipse><svg:path d="M2 9v3a10 10 0 0 0 20 0V9"></svg:path><svg:ellipse cx="12" cy="9" rx="6" ry="3"></svg:ellipse><svg:path d="m14 8l6-6h2"></svg:path></svg:g>`,
})
export class LucideLabCoconutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
