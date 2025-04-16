import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquareActivityIcon],svg[lucide-square-activity-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M17 12h-2l-2 5l-2-10l-2 5H7"></svg:path></svg:g>`,
})
export class LucideSquareActivityIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
