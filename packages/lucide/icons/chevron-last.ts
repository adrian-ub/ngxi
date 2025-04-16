import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideChevronLastIcon],svg[lucide-chevron-last-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 18l6-6l-6-6m10 0v12"></svg:path>`,
})
export class LucideChevronLastIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
