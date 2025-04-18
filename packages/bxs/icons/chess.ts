import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsChessIcon],svg[bxs-chess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 6h-4v4h4v4h-4v4h-4v-4H8v4H4v-4h4v-4H4V8h4V4h4v4h4V4h4z"></svg:path><svg:path fill="currentColor" d="M8 8h4v4H8zm4 4h4v4h-4z"></svg:path>`,
})
export class BxsChessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
