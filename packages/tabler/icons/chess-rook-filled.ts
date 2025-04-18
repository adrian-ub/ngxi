import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChessRookFilledIcon],svg[tabler-chess-rook-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a1 1 0 0 1 .993.883L15 4v2h1.652l.362-2.164A1 1 0 0 1 18.048 3l.116.013A1 1 0 0 1 19 4.048l-.013.116l-.5 3a1 1 0 0 1-.865.829L17.5 8h-1.383l.877 7.89a1 1 0 0 1-.877 1.103L16 17H8a1 1 0 0 1-1-.993l.006-.117L7.883 8H6.5a1 1 0 0 1-.96-.718l-.026-.118l-.5-3a1 1 0 0 1 1.947-.442l.025.114L7.347 6H9V4a1 1 0 0 1 1.993-.117L11 4v2h2V4a1 1 0 0 1 1-1m4 15H6a1 1 0 0 0-1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"></svg:path>`,
})
export class TablerChessRookFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
