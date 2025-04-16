import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideArrowLeftToLineIcon],svg[lucide-arrow-left-to-line-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19V5m10 1l-6 6l6 6m-6-6h14"></svg:path>`,
})
export class LucideArrowLeftToLineIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
