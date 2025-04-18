import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRatioIcon],svg[lucide-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="12" height="20" x="6" y="2" rx="2"></svg:rect><svg:rect width="20" height="12" x="2" y="6" rx="2"></svg:rect></svg:g>`,
})
export class LucideRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
