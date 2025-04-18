import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabScissorsHairCombIcon],svg[lucide-lab-scissors-hair-comb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 2C5 5 7 5 6 8m4-6c-1 3 1 3 0 6"></svg:path><svg:circle cx="4" cy="20" r="2"></svg:circle><svg:path d="M5.4 18.6L8 16m2.8-2.8L14 10"></svg:path><svg:circle cx="12" cy="20" r="2"></svg:circle><svg:path d="m2 10l8.6 8.6M18 2h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2m0-16h4m-4 4h4m-4 4h4m-4 4h4"></svg:path></svg:g>`,
})
export class LucideLabScissorsHairCombIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
