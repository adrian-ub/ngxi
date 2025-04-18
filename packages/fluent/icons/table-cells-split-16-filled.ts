import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellsSplit16FilledIcon],svg[fluent-table-cells-split-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h5.95a2.5 2.5 0 0 0-2.45-2H8zM7 2H4.5a2.5 2.5 0 0 0-2.45 2H7zm1 12h3.5a2.5 2.5 0 0 0 2.45-2H8zm-1-2H2.05a2.5 2.5 0 0 0 2.45 2H7zm-5-1V5h12v6zm5-5v4h1V6z"></svg:path>`,
})
export class FluentTableCellsSplit16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
