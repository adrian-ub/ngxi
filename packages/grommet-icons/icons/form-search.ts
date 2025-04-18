import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFormSearchIcon],svg[grommet-icons-form-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M13.8 13.8L18 18zM10.5 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"></svg:path>`,
})
export class GrommetIconsFormSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
