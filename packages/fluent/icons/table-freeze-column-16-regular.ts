import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumn16RegularIcon],svg[fluent-table-freeze-column-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14zM6 3h4v2H6zm0 3h4v4H6zm0 5h4v2H6zm-1-1H3V6h2zm0-5H3v-.5A1.5 1.5 0 0 1 4.5 3H5zm-2 6.5V11h2v2h-.5A1.5 1.5 0 0 1 3 11.5M11.5 3A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5H11V3z"></svg:path>`,
})
export class FluentTableFreezeColumn16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
