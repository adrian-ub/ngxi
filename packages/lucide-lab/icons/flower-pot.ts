import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlowerPotIcon],svg[lucide-lab-flower-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 8h1m2-3v1m3 2h-1"></svg:path><svg:circle cx="12" cy="8" r="2"></svg:circle><svg:path d="M12 11a3 3 0 1 1-3-3a3 3 0 1 1 3-3a3 3 0 1 1 3 3a3 3 0 1 1-3 3m0-1v8m3 0l-1 4h-4l-1-4m-1 0h8"></svg:path></svg:g>`,
})
export class LucideLabFlowerPotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
