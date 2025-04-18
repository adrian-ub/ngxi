import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignEndVerticalIcon],svg[lucide-align-end-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="6" x="2" y="4" rx="2"></svg:rect><svg:rect width="9" height="6" x="9" y="14" rx="2"></svg:rect><svg:path d="M22 22V2"></svg:path></svg:g>`,
})
export class LucideAlignEndVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
