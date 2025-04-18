import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabIndianRupeeCircleIcon],svg[lucide-lab-indian-rupee-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 11h6.5m0-4H9a4 4 0 0 1 0 8l3 3"></svg:path></svg:g>`,
})
export class LucideLabIndianRupeeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
