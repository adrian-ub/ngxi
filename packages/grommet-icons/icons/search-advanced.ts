import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSearchAdvancedIcon],svg[grommet-icons-search-advanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m15 16l6 6zm-5 2a7 7 0 1 0 0-14a7 7 0 0 0 0 14ZM20 1v6m-3-3h6"></svg:path>`,
})
export class GrommetIconsSearchAdvancedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
