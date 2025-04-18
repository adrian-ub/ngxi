import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellCenter24FilledIcon],svg[fluent-table-cell-center-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21h5v-5h-5zm6.5 0h1.75A3.25 3.25 0 0 0 21 17.75V16h-5zm5-6.5v-5h-5v5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5z"></svg:path>`,
})
export class FluentTableCellCenter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
