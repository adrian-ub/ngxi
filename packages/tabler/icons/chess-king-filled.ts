import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChessKingFilledIcon],svg[tabler-chess-king-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v2h2a1 1 0 0 1 .117 1.993L15 7h-2v1.758a4.5 4.5 0 0 1 2.033-.734l.24-.018L15.5 8a4.5 4.5 0 0 1 4.5 4.5a4.504 4.504 0 0 1-4.064 4.478l-.217.016L15.5 17h-7a4.5 4.5 0 1 1 2.501-8.241L11 7H9a1 1 0 0 1-.117-1.993L9 5h2V3a1 1 0 0 1 1-1m6 16H6a1 1 0 0 0-1 1a2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18"></svg:path>`,
})
export class TablerChessKingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
