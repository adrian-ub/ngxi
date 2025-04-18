import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBulletMapIcon],svg[icon-park-outline-bullet-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 6v36h36"></svg:path><svg:path d="M16 40V9c0-1.105 1.053-2 2.353-2h15.294C34.947 7 36 7.895 36 9v31m-19-7.892h17M22 19h8m-4-5v18.108"></svg:path></svg:g>`,
})
export class IconParkOutlineBulletMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
