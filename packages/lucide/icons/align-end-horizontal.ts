import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignEndHorizontalIcon],svg[lucide-align-end-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="16" x="4" y="2" rx="2"></svg:rect><svg:rect width="6" height="9" x="14" y="9" rx="2"></svg:rect><svg:path d="M22 22H2"></svg:path></svg:g>`,
})
export class LucideAlignEndHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
