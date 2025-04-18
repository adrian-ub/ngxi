import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDatabaseIcon],svg[grommet-icons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 2h22v7H1zm3 10h1v1H4zm0-7h1v1H4zm0 14h1v1H4zm-3-3h22v7H1zm0-7h22v7H1z"></svg:path>`,
})
export class GrommetIconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
