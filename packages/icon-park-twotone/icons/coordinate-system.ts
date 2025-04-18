import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCoordinateSystemIcon],svg[icon-park-twotone-coordinate-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCoordinateSystem0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="m24 12l14 8v16l-14 8l-14-8V20z"></svg:path><svg:path stroke-linecap="round" d="M24 6v6m-14 8l14 8l14-8m0 16l6 3M4 39l6-3m14-8v16"></svg:path><svg:path d="m31 16l7 4v8M17 16l-7 4v8m7 12l7 4l7-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCoordinateSystem0)"></svg:path>`,
})
export class IconParkTwotoneCoordinateSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
