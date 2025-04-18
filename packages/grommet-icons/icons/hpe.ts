import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsHpeIcon],svg[grommet-icons-hpe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6h44v12H2zm3 3h38v6H5z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsHpeIcon {
  readonly viewBox = input("0 0 48 24")
  readonly width = input("2em")
  readonly height = input("1em")
}
