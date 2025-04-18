import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBarIcon],svg[grommet-icons-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 5h16v18H7zm0 0h16V3c0-1.105-.895-2-1.994-2H8.994A1.99 1.99 0 0 0 7 3zM1 8.009C1 6.899 1.898 6 2.998 6H7v12H2.998A2.005 2.005 0 0 1 1 15.991zM11 8v10m4-10v10m4-10v10"></svg:path>`,
})
export class GrommetIconsBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
