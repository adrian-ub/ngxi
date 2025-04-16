import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChartBarSquare16SolidIcon],svg[heroicons-chart-bar-square-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.75 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 4.75 9m2.5-1.75a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0zm4-3.25a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsChartBarSquare16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
