import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilterDismiss24FilledIcon],svg[fluent-filter-dismiss-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708L16.793 7.5l-1.647 1.646a.5.5 0 0 0 .708.708L17.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 7.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 6.793zM8 11h4.022a6.5 6.5 0 0 0 2.012 2H8a1 1 0 0 1-.117-1.993zM5 6h6.174a6.5 6.5 0 0 0-.155 2H5a1 1 0 0 1-.117-1.993zm4.883 10.007L10 16h4a1 1 0 0 1 .117 1.993L14 18h-4a1 1 0 0 1-.117-1.993"></svg:path>`,
})
export class FluentFilterDismiss24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
