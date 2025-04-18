import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellCenter16RegularIcon],svg[fluent-table-cell-center-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM6 13h4v-2H6zm-1-2H3v.5A1.5 1.5 0 0 0 4.5 13H5zm0-5H3v4h2zm1-1h4V3H6zM5 3h-.5A1.5 1.5 0 0 0 3 4.5V5h2zm8 3h-2v4h2zm0 5h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5zm0-6v-.5A1.5 1.5 0 0 0 11.5 3H11v2z"></svg:path>`,
})
export class FluentTableCellCenter16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
