import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPuzzlePiece32Icon],svg[fluent-color-puzzle-piece-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPuzzlePiece320)" d="M17 2a3 3 0 0 0-3 3v1H9.75A2.75 2.75 0 0 0 7 8.75V13H6a3 3 0 1 0 0 6h1v4.25A2.75 2.75 0 0 0 9.75 26H14v1a3 3 0 1 0 6 0v-1h4.25A2.75 2.75 0 0 0 27 23.25V19h-2a3 3 0 1 1 0-6h2V8.75A2.75 2.75 0 0 0 24.25 6H20V5a3 3 0 0 0-3-3"></svg:path><svg:path fill="url(#fluentColorPuzzlePiece321)" fill-opacity=".7" d="M17 2a3 3 0 0 0-3 3v1H9.75A2.75 2.75 0 0 0 7 8.75V13H6a3 3 0 1 0 0 6h1v4.25A2.75 2.75 0 0 0 9.75 26H14v1a3 3 0 1 0 6 0v-1h4.25A2.75 2.75 0 0 0 27 23.25V19h-2a3 3 0 1 1 0-6h2V8.75A2.75 2.75 0 0 0 24.25 6H20V5a3 3 0 0 0-3-3"></svg:path><svg:defs><svg:lineargradient id="fluentColorPuzzlePiece320" x1="7" x2="22.397" y1=".444" y2="29.772" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPuzzlePiece321" x1="18.714" x2="25.099" y1="5.439" y2="32.629" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPuzzlePiece32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
