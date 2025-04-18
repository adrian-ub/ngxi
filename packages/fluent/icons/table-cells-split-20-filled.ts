import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellsSplit20FilledIcon],svg[fluent-table-cells-split-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h7v-.5A2.5 2.5 0 0 0 14.5 3H10zm7 7V7H3v6zm-7-5v4H9V8zm0 9h4.5a2.5 2.5 0 0 0 2.5-2.5V14h-7zm-1-3H3v.5A2.5 2.5 0 0 0 5.5 17H9zm0-8V3H5.5A2.5 2.5 0 0 0 3 5.5V6z"></svg:path>`,
})
export class FluentTableCellsSplit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
