import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsArrowUturnDownIcon],svg[heroicons-arrow-uturn-down-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 15l-6 6m0 0l-6-6m6 6V9a6 6 0 0 1 12 0v3"></svg:path>`,
})
export class HeroiconsArrowUturnDownIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
