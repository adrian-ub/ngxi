import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextSortAscending16RegularIcon],svg[fluent-text-sort-ascending-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.462 1.308a.5.5 0 0 0-.923 0l-2.5 6a.5.5 0 0 0 .923.384L3.667 6h2.666l.705 1.692a.5.5 0 1 0 .924-.384zM4.083 5L5 2.8L5.917 5zM2.5 9.5A.5.5 0 0 1 3 9h3.5a.5.5 0 0 1 .41.787L3.96 14H6.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.41-.787L5.54 10H3a.5.5 0 0 1-.5-.5m10-8.5a.5.5 0 0 1 .5.5v11.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V1.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentTextSortAscending16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
