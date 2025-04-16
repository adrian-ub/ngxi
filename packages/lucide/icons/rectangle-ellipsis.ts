import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRectangleEllipsisIcon],svg[lucide-rectangle-ellipsis-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="12" x="2" y="6" rx="2"></svg:rect><svg:path d="M12 12h.01M17 12h.01M7 12h.01"></svg:path></svg:g>`,
})
export class LucideRectangleEllipsisIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
