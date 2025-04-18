import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignVerticalDistributeCenterIcon],svg[lucide-align-vertical-distribute-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 17h-3m3-10h-5M5 17H2M7 7H2"></svg:path><svg:rect width="14" height="6" x="5" y="14" rx="2"></svg:rect><svg:rect width="10" height="6" x="7" y="4" rx="2"></svg:rect></svg:g>`,
})
export class LucideAlignVerticalDistributeCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
