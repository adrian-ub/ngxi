import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChessIcon],svg[icon-park-outline-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M34 4H14v10h20zm-7 10l6 23H15l6-23m19 30H8v-4l6-3h20l6 3zM12 23.02h24M20.5 4v4m7-4v4"></svg:path>`,
})
export class IconParkOutlineChessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
