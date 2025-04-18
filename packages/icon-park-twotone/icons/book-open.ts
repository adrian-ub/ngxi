import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBookOpenIcon],svg[icon-park-twotone-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBookOpen0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M5 7h11a8 8 0 0 1 8 8v27a6 6 0 0 0-6-6H5zm38 0H32a8 8 0 0 0-8 8v27a6 6 0 0 1 6-6h13z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBookOpen0)"></svg:path>`,
})
export class IconParkTwotoneBookOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
