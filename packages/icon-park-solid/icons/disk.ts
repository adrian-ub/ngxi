import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDiskIcon],svg[icon-park-solid-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDisk0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" d="M34 4v18H15V4z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 11v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11.997 4h25.001"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDisk0)"></svg:path>`,
})
export class IconParkSolidDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
