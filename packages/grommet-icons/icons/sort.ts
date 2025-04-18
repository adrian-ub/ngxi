import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSortIcon],svg[grommet-icons-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 3h15M7 9h9m-9 6h15M2 2h2v2H2zm0 6h2v2H2zm0 6h2v2H2zm0 6h2v2H2zm5 1h9"></svg:path>`,
})
export class GrommetIconsSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
