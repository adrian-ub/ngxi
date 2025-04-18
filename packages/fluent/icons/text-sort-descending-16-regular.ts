import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextSortDescending16RegularIcon],svg[fluent-text-sort-descending-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 1.5A.5.5 0 0 1 3 1h3.5a.5.5 0 0 1 .41.787L3.96 6H6.5a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.41-.787L5.54 2H3a.5.5 0 0 1-.5-.5m2.962 6.808a.5.5 0 0 0-.923 0l-2.5 6a.5.5 0 1 0 .923.384L3.667 13h2.667l.705 1.692a.5.5 0 0 0 .923-.384zM4.084 12L5 9.8l.917 2.2zM12.5 1a.5.5 0 0 1 .5.5v11.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L12 13.293V1.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentTextSortDescending16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
