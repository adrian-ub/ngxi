import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesPantsIcon],svg[icon-park-outline-clothes-pants-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 44h9L38 4H10L6 44h9l9-25zM24 4v5.5"></svg:path><svg:path d="M17 4s0 6-2 8s-6.1 3-6.1 3M31 4s0 6 2 8s6.1 3 6.1 3"></svg:path></svg:g>`,
})
export class IconParkOutlineClothesPantsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
