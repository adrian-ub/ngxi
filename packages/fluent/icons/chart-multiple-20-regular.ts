import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChartMultiple20RegularIcon],svg[fluent-chart-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.518 9c.261 0 .48-.201.482-.463V8.5A6.5 6.5 0 0 0 10.5 2h-.037a.473.473 0 0 0-.463.482V8.5a.5.5 0 0 0 .5.5zM11 3.022A5.5 5.5 0 0 1 15.978 8H11zM8 9V5.1A5 5 0 0 0 9 15v1a6 6 0 0 1-.5-11.98a.47.47 0 0 1 .5.48V9a1 1 0 0 0 1 1h4.5a.47.47 0 0 1 .48.5a6 6 0 0 1-.063.5H14l-.1.002V11H10a2 2 0 0 1-2-2m9 1a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-7a1 1 0 0 0-1-1m-3 2a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1m-4 3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentChartMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
