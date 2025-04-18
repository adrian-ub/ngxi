import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChoppingBoardIcon],svg[icon-park-outline-chopping-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 8h28.011A1.99 1.99 0 0 1 44 10v28c0 1.105-.883 2-1.987 2H14c-4 0-10-2-10-16S11 8 14 8m-2 12v8"></svg:path>`,
})
export class IconParkOutlineChoppingBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
