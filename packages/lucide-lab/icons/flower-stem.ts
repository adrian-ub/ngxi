import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlowerStemIcon],svg[lucide-lab-flower-stem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 8h1m2-3v1m3 2h-1"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle><svg:path d="M12 11a3 3 0 1 1-3-3a3 3 0 1 1 3-3a3 3 0 1 1 3 3a3 3 0 1 1-3 3m0-1v12m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5"></svg:path></svg:g>`,
})
export class LucideLabFlowerStemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
