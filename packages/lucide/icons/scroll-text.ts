import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideScrollTextIcon],svg[lucide-scroll-text-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 12h-5m5-4h-5m9 9V5a2 2 0 0 0-2-2H4"></svg:path><svg:path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></svg:path></svg:g>`,
})
export class LucideScrollTextIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
