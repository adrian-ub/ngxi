import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideIndentIncreaseIcon],svg[lucide-indent-increase-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12H11m10 6H11M21 6H11M3 8l4 4l-4 4"></svg:path>`,
})
export class LucideIndentIncreaseIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
