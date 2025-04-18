import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDxcIcon],svg[grommet-icons-dxc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 14l4 7H8zm0-4L8 3h8zM2 18H0V6h2a6 6 0 1 1 0 12m20 0a6 6 0 1 1 0-12h2v12z"></svg:path>`,
})
export class GrommetIconsDxcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
