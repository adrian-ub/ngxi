import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRefreshCcwDotIcon],svg[lucide-refresh-ccw-dot-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 2v6h6"></svg:path><svg:path d="M21 12A9 9 0 0 0 6 5.3L3 8m18 14v-6h-6"></svg:path><svg:path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></svg:path><svg:circle cx="12" cy="12" r="1"></svg:circle></svg:g>`,
})
export class LucideRefreshCcwDotIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
