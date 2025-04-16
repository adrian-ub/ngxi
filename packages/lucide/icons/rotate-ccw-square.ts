import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRotateCcwSquareIcon],svg[lucide-rotate-ccw-square-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 9V7a2 2 0 0 0-2-2h-6"></svg:path><svg:path d="m15 2l-3 3l3 3m5 5v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"></svg:path></svg:g>`,
})
export class LucideRotateCcwSquareIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
