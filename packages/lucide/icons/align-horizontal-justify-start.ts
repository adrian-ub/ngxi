import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignHorizontalJustifyStartIcon],svg[lucide-align-horizontal-justify-start-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="14" x="6" y="5" rx="2"></svg:rect><svg:rect width="6" height="10" x="16" y="7" rx="2"></svg:rect><svg:path d="M2 2v20"></svg:path></svg:g>`,
})
export class LucideAlignHorizontalJustifyStartIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
