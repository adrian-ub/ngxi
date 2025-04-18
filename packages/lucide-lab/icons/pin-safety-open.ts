import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPinSafetyOpenIcon],svg[lucide-lab-pin-safety-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.8 3.2c-1.6-1.6-4.1-1.6-5.7 0L12.3 6S15 9 18 6c-3 3 0 5.7 0 5.7l2.8-2.8c1.6-1.6 1.6-4.2 0-5.7M7.1 21.1l10.3-10.2"></svg:path><svg:circle cx="5" cy="19" r="3"></svg:circle><svg:path d="M9 2s-4.1 9.5-6.755 15.8"></svg:path></svg:g>`,
})
export class LucideLabPinSafetyOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
