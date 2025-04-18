import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellCenterArrowRepeatAll24FilledIcon],svg[fluent-table-cell-center-arrow-repeat-all-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.298 21a1.75 1.75 0 0 1-1.266-.633a5 5 0 0 1-.207-.27l-.006-.008A4.5 4.5 0 0 1 10 17.5c0-.526.09-1.03.256-1.5H9.5v5zm7.658-6.642c.33-.169.695-.223 1.044-.172V9.5h-5v2.168a1.75 1.75 0 0 1 1.987.345l1.499 1.498l.014.015a1.74 1.74 0 0 1 .456.832M21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm14.28-3.28a.75.75 0 1 0-1.06 1.06l.22.22H14.5a3.5 3.5 0 0 0-2.863 5.513a.75.75 0 0 0 1.226-.863A2 2 0 0 1 14.5 15.5h1.94l-.22.22a.75.75 0 1 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06zm4.082 2.766a.75.75 0 1 0-1.226.864A2 2 0 0 1 18.5 19.5h-1.94l.22-.22a.75.75 0 1 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.22-.22h1.94a3.5 3.5 0 0 0 2.862-5.514"></svg:path>`,
})
export class FluentTableCellCenterArrowRepeatAll24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
