import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChessOneIcon],svg[icon-park-outline-chess-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M40 44H8v-4l6-3h20l6 3zM14 19h20"></svg:path><svg:path d="M27.74 19L33 37H15l5.26-18"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M27.74 19L33 37H15l5.26-18"></svg:path><svg:path stroke="currentColor" stroke-width="4" d="M24 4a8 8 0 0 0-3.876 15h7.752A8 8 0 0 0 24 4Z"></svg:path></svg:g>`,
})
export class IconParkOutlineChessOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
