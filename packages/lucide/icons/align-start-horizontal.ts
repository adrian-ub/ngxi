import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignStartHorizontalIcon],svg[lucide-align-start-horizontal-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="16" x="4" y="6" rx="2"></svg:rect><svg:rect width="6" height="9" x="14" y="6" rx="2"></svg:rect><svg:path d="M22 2H2"></svg:path></svg:g>`,
})
export class LucideAlignStartHorizontalIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
