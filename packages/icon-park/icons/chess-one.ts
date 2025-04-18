import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChessOneIcon],svg[icon-park-chess-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M40 44H8V40L14 37H34L40 40V44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M14 19H34"></svg:path><svg:path fill="#2F88FF" d="M27.74 19L33 37H15L20.26 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M27.74 19L33 37H15L20.26 19"></svg:path><svg:path stroke="#000" stroke-width="4" d="M24 4C19.5817 4 16 7.58172 16 12C16 15.012 17.6646 17.6353 20.124 19H27.876C30.3354 17.6353 32 15.012 32 12C32 7.58172 28.4183 4 24 4Z"></svg:path></svg:g>`,
})
export class IconParkChessOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
