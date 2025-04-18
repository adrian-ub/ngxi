import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePositiveDynamicsIcon],svg[icon-park-outline-positive-dynamics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M17 33.95v8.16M9 40v2.056M25 27v15.071m8-23.11v23.127m8-31.118v31.113M7 33L34 6M23.5 6H34"></svg:path>`,
})
export class IconParkOutlinePositiveDynamicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
