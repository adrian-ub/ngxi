import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumnAndRow16RegularIcon],svg[fluent-table-freeze-column-and-row-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM3 6v4h2V6zm3 0v4h4V6zm4 7v-2H6v2zm-5 0v-2H3v.5A1.5 1.5 0 0 0 4.5 13zM3 4.5V5h8v8h.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5"></svg:path>`,
})
export class FluentTableFreezeColumnAndRow16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
