import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCheckerboardIcon],svg[icon-park-twotone-checkerboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCheckerboard0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm6 13h21M4 17h9m22 14h9M6 31h19m-8-10v23M31 4v23m0 8v9M17 4v9"></svg:path><svg:path fill="#555" d="M35 31a4 4 0 1 1-8 0a4 4 0 0 1 8 0M21 17a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCheckerboard0)"></svg:path>`,
})
export class IconParkTwotoneCheckerboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
