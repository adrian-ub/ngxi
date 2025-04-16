import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTrendingUpDownIcon],svg[lucide-trending-up-down-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14.828 14.828L21 21m0-5v5h-5m5-18l-9 9l-4-4l-6 6"></svg:path><svg:path d="M21 8V3h-5"></svg:path></svg:g>`,
})
export class LucideTrendingUpDownIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
