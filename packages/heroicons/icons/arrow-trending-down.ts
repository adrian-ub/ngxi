import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowTrendingDownIcon],svg[heroicons-arrow-trending-down-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6L9 12.75l4.286-4.286a11.95 11.95 0 0 1 4.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"></svg:path>`,
})
export class HeroiconsArrowTrendingDownIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
