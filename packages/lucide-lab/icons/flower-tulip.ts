import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlowerTulipIcon],svg[lucide-lab-flower-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 7c-2-3.2-6-4-6-4v5c0 3.3 2.7 6 6 6v8"></svg:path><svg:path d="M9.5 4.5C10 3 12 2 12 2s2 1 2.5 2.5"></svg:path><svg:path d="M12 14c3.3 0 6-2.7 6-6V3c-6.2.9-10.8 11-6 11m0 8c-4.2 0-7-1.7-7-5c4.2 0 7 1.7 7 5m0 0c4.2 0 7-1.7 7-5c-4.2 0-7 1.7-7 5"></svg:path></svg:g>`,
})
export class LucideLabFlowerTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
