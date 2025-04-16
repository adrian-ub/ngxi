import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTrendingDownIcon],svg[lucide-trending-down-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m22 17l-8.5-8.5l-5 5L2 7"></svg:path><svg:path d="M16 17h6v-6"></svg:path></svg:g>`,
})
export class LucideTrendingDownIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
