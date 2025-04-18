import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsSystemIcon],svg[grommet-icons-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 19h22V1H1zm4 4h14zm3 0h8v-4H8zM7.757 5.757l2.122 2.122zM9 10H6zm.879 2.121l-2.122 2.122zM12 13v3zm2.121-.879l2.122 2.122zM18 10h-3zm-1.757-4.243l-2.122 2.122zM12 7V4zm0 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></svg:path>`,
})
export class GrommetIconsSystemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
