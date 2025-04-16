import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideArrowBigLeftDashIcon],svg[lucide-arrow-big-left-dash-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 15V9m-4 6h-3v4l-7-7l7-7v4h3z"></svg:path>`,
})
export class LucideArrowBigLeftDashIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
