import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggClapperBoardIcon],svg[gg-clapper-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.17 3l-.004.005A3 3 0 0 1 23 6v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-9.694 2h6L13.09 9h-6zM5.09 9l3.387-4H4a1 1 0 0 0-1 1v3zM3 11v7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7zm18-2V6a1 1 0 0 0-1-1h-1.524L15.09 9z" clip-rule="evenodd"></svg:path>`,
})
export class GgClapperBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
