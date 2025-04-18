import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShareThreeIcon],svg[icon-park-share-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38V42L6 42L6 38"></svg:path><svg:path d="M30 6L40 16L30 26"></svg:path><svg:path d="M40 16C20 16 6 19 6 32"></svg:path></svg:g>`,
})
export class IconParkShareThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
