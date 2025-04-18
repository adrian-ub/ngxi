import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineZipIcon],svg[icon-park-outline-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M4.629 12.749L24 5l19.371 7.749a1 1 0 0 1 .629.928V42a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13.677a1 1 0 0 1 .629-.928Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 22v10"></svg:path><svg:path d="M33 27c1.657 0 3-1.12 3-2.5S34.657 22 33 22h-2.7a.3.3 0 0 0-.3.3v2.2c0 1.38 1.343 2.5 3 2.5Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M30 22v10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22h6.005L12 32h6.005"></svg:path></svg:g>`,
})
export class IconParkOutlineZipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
