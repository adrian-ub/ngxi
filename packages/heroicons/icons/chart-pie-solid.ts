import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsChartPieSolidIcon],svg[heroicons-chart-pie-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25a.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75a8.25 8.25 0 0 1-16.5 0"></svg:path><svg:path d="M12.75 3a.75.75 0 0 1 .75-.75a8.25 8.25 0 0 1 8.25 8.25a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75z"></svg:path></svg:g>`,
})
export class HeroiconsChartPieSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
