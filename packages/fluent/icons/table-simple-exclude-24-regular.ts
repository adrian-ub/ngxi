import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude24RegularIcon],svg[fluent-table-simple-exclude-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.25A3.25 3.25 0 0 1 5.25 2h10a3.25 3.25 0 0 1 3.25 3.25V10a1 1 0 0 1-1 1H11v6.5a1 1 0 0 1-1 1H5.25A3.25 3.25 0 0 1 2 15.25zm15 0a1.75 1.75 0 0 0-1.75-1.75H11v6h6zM9.5 3.5H5.25A1.75 1.75 0 0 0 3.5 5.25V9.5h6zm-6 11.75c0 .966.784 1.75 1.75 1.75H9.5v-6h-6zm9-.5a2.25 2.25 0 0 1 2.25-2.25h5A2.25 2.25 0 0 1 22 14.75v5A2.25 2.25 0 0 1 19.75 22h-5a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentTableSimpleExclude24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
