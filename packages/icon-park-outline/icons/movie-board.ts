import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMovieBoardIcon],svg[icon-park-outline-movie-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16H4v26h40zm0 0V6H4v10zM26 6l4 10M18 6l4 10M10 6l4 10M34 6l4 10m-26 8h24m-24 8h12"></svg:path>`,
})
export class IconParkOutlineMovieBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
