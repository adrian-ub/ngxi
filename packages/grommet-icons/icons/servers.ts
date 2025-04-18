import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsServersIcon],svg[grommet-icons-servers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 19h1v-1H7zm11 0h1v-1h-1zM1 23h11V1H1zm11 0h11V1H12zM4 5h5zm11 0h5zM4 9h5zm11 0h5zM4 13h5zm11 0h5z"></svg:path>`,
})
export class GrommetIconsServersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
