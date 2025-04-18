import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBrdigeThreeIcon],svg[icon-park-brdige-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 12V38"></svg:path><svg:path d="M8 38C8 38 16 27 24 27C32 27 40 38 40 38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 27H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 19H44"></svg:path><svg:path stroke-linecap="round" d="M24 15L24 27"></svg:path><svg:path stroke-linecap="round" d="M16 19L16 27"></svg:path><svg:path stroke-linecap="round" d="M32 19L32 27"></svg:path></svg:g>`,
})
export class IconParkBrdigeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
