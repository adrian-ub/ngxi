import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlowerRoseIcon],svg[lucide-lab-flower-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 6a4 4 0 1 1-2-3.46"></svg:path><svg:circle cx="12" cy="6" r="2"></svg:circle><svg:path d="M10 6a4 4 0 0 1 8 0v2A6 6 0 0 1 6 8V6m6 8v8m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5"></svg:path></svg:g>`,
})
export class LucideLabFlowerRoseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
