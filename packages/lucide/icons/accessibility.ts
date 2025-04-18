import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAccessibilityIcon],svg[lucide-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="16" cy="4" r="1"></svg:circle><svg:path d="m18 19l1-7l-6 1M5 8l3-3l5.5 3l-2.36 3.5m-6.9 3a5 5 0 0 0 6.88 6"></svg:path><svg:path d="M13.76 17.5a5 5 0 0 0-6.88-6"></svg:path></svg:g>`,
})
export class LucideAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
