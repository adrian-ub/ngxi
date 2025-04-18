import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabMealBoxIcon],svg[lucide-lab-meal-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="6"></svg:rect><svg:path d="M22 12c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6m5-6h10"></svg:path><svg:rect width="4" height="4" x="6" y="10" rx="1"></svg:rect><svg:rect width="4" height="4" x="14" y="10" rx="1"></svg:rect></svg:g>`,
})
export class LucideLabMealBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
