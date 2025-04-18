import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCoordinateSystemIcon],svg[icon-park-solid-coordinate-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCoordinateSystem0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m24 12l14 8v16l-14 8l-14-8V20z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 6v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m10 20l14 8l14-8"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m38 36l6 3M4 39l6-3"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 28v16"></svg:path><svg:path stroke="#fff" d="m31 16l7 4v8M17 16l-7 4v8m7 12l7 4l7-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCoordinateSystem0)"></svg:path>`,
})
export class IconParkSolidCoordinateSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
