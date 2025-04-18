import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabEuroSquareIcon],svg[lucide-lab-euro-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M7 12h7m2-4a5.14 5.14 0 0 0-8 4a4.95 4.95 0 0 0 8 4"></svg:path></svg:g>`,
})
export class LucideLabEuroSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
