import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentDropdownFilledIcon],svg[tdesign-component-dropdown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v7H2zm2 9v9h16v-9h2v11H2V11zm2 1h12v2H6zm0 4h12v2H6z"></svg:path>`,
})
export class TdesignComponentDropdownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
