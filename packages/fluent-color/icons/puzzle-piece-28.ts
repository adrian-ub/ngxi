import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPuzzlePiece28Icon],svg[fluent-color-puzzle-piece-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPuzzlePiece280)" d="M15 2a3 3 0 0 0-3 3v1H9.25A2.25 2.25 0 0 0 7 8.25V11H6a3 3 0 1 0 0 6h1v2.75A2.25 2.25 0 0 0 9.25 22H12v1a3 3 0 1 0 6 0v-1h2.75A2.25 2.25 0 0 0 23 19.75V16h-2a2 2 0 1 1 0-4h2V8.25A2.25 2.25 0 0 0 20.75 6H18V5a3 3 0 0 0-3-3"></svg:path><svg:path fill="url(#fluentColorPuzzlePiece281)" fill-opacity=".7" d="M15 2a3 3 0 0 0-3 3v1H9.25A2.25 2.25 0 0 0 7 8.25V11H6a3 3 0 1 0 0 6h1v2.75A2.25 2.25 0 0 0 9.25 22H12v1a3 3 0 1 0 6 0v-1h2.75A2.25 2.25 0 0 0 23 19.75V16h-2a2 2 0 1 1 0-4h2V8.25A2.25 2.25 0 0 0 20.75 6H18V5a3 3 0 0 0-3-3"></svg:path><svg:defs><svg:lineargradient id="fluentColorPuzzlePiece280" x1="6.333" x2="19.74" y1=".667" y2="25.494" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPuzzlePiece281" x1="16.095" x2="21.707" y1="4.947" y2="28.183" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPuzzlePiece28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
