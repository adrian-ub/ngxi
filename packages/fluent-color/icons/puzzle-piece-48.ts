import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPuzzlePiece48Icon],svg[fluent-color-puzzle-piece-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPuzzlePiece480)" d="M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5"></svg:path><svg:path fill="url(#fluentColorPuzzlePiece481)" fill-opacity=".7" d="M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5"></svg:path><svg:defs><svg:lineargradient id="fluentColorPuzzlePiece480" x1="10.667" x2="32.767" y1="1.778" y2="43.522" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPuzzlePiece481" x1="27.262" x2="36.451" y1="8.912" y2="47.722" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPuzzlePiece48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
