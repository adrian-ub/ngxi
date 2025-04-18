import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumnAndRow16FilledIcon],svg[fluent-table-freeze-column-and-row-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V10h3V6H3V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5H10v-2H6v3h5.5a2.5 2.5 0 0 0 2.5-2.5zM10 6H6v4h4zm-5 5H2v.5A2.5 2.5 0 0 0 4.5 14H5z"></svg:path>`,
})
export class FluentTableFreezeColumnAndRow16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
