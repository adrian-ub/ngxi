import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabDishwasherIcon],svg[lucide-lab-dishwasher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 6v2M3 7h18"></svg:path><svg:rect width="18" height="20" x="3" y="2" rx="2"></svg:rect><svg:path d="m9 11l-2 7"></svg:path><svg:circle cx="14.5" cy="15.5" r="2.5"></svg:circle><svg:path d="m13 11l-2 7"></svg:path></svg:g>`,
})
export class LucideLabDishwasherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
