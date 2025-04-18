import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal4Search16FilledIcon],svg[fluent-line-horizontal-4-search-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 8c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 10.5 8m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m3.435 3.056L12.879 9H2.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 .685-.444M7.145 7.5A4.5 4.5 0 0 1 6.257 6H2.75a.75.75 0 0 0 0 1.5zM6.257 3C6.09 3.47 6 3.974 6 4.5H2.75a.75.75 0 0 1 0-1.5zM2.75 12a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLineHorizontal4Search16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
