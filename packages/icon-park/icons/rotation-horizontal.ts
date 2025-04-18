import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationHorizontalIcon],svg[icon-park-rotation-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 31L24 35L20 39"></svg:path><svg:path d="M32 34.1679C39.0636 32.6248 44 29.1006 44 25C44 19.4772 35.0457 15 24 15C12.9543 15 4 19.4772 4 25C4 30.5228 12.9543 35 24 35"></svg:path></svg:g>`,
})
export class IconParkRotationHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
