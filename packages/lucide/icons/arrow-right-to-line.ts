import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideArrowRightToLineIcon],svg[lucide-arrow-right-to-line-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12H3m8 6l6-6l-6-6m10-1v14"></svg:path>`,
})
export class LucideArrowRightToLineIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
