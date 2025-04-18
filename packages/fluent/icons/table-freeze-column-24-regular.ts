import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumn24RegularIcon],svg[fluent-table-freeze-column-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25zm-3.25 1.75a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5v15zM10 4.5v4h4v-4zm-1.5 0H6.25A1.75 1.75 0 0 0 4.5 6.25V8.5h4zm0 5.5h-4v4h4zm1.5 4h4v-4h-4zm0 1.5v4h4v-4zm-1.5 0h-4v2.25c0 .966.784 1.75 1.75 1.75H8.5z"></svg:path>`,
})
export class FluentTableFreezeColumn24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
