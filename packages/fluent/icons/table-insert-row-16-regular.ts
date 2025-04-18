import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertRow16RegularIcon],svg[fluent-table-insert-row-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 13a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm0-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zM2 9.5A1.5 1.5 0 0 0 3.5 11h9A1.5 1.5 0 0 0 14 9.5v-3A1.5 1.5 0 0 0 12.5 5h-9A1.5 1.5 0 0 0 2 6.5zm1.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H5v4zM6 10V6h4v4zm5 0V6h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class FluentTableInsertRow16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
