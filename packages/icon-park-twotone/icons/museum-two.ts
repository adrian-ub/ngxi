import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMuseumTwoIcon],svg[icon-park-twotone-museum-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMuseumTwo0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44h40"></svg:path><svg:path fill="#555" d="M8 7.273S15 4 24 4s16 3.273 16 3.273V13H8z"></svg:path><svg:path stroke-linecap="round" d="M10 13v25m7-25v25m7-25v25m7-25v25m7-25v25"></svg:path><svg:path d="M7 38h34v6H7z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMuseumTwo0)"></svg:path>`,
})
export class IconParkTwotoneMuseumTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
