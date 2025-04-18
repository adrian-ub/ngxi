import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPuzzlePiece24Icon],svg[fluent-color-puzzle-piece-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPuzzlePiece240)" d="M13 2a2.47 2.47 0 0 1 2.47 2.47l-.001.53H19a1 1 0 0 1 1 1l-.001 3.499l-1.53.001a2.47 2.47 0 0 0-2.464 2.307L16 11.97v.06a2.47 2.47 0 0 0 2.307 2.465l.163.005l1.529-.001l.001 3.504a1 1 0 0 1-1 1l-3.531-.001v.528a2.47 2.47 0 1 1-4.939 0v-.528H7a1 1 0 0 1-1-1l-.001-3.531h-.53a2.47 2.47 0 0 1 0-4.94H6V6a1 1 0 0 1 1-1h3.53v-.53A2.47 2.47 0 0 1 13 2"></svg:path><svg:path fill="url(#fluentColorPuzzlePiece241)" fill-opacity=".7" d="M13 2a2.47 2.47 0 0 1 2.47 2.47l-.001.53H19a1 1 0 0 1 1 1l-.001 3.499l-1.53.001a2.47 2.47 0 0 0-2.464 2.307L16 11.97v.06a2.47 2.47 0 0 0 2.307 2.465l.163.005l1.529-.001l.001 3.504a1 1 0 0 1-1 1l-3.531-.001v.528a2.47 2.47 0 1 1-4.939 0v-.528H7a1 1 0 0 1-1-1l-.001-3.531h-.53a2.47 2.47 0 0 1 0-4.94H6V6a1 1 0 0 1 1-1h3.53v-.53A2.47 2.47 0 0 1 13 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorPuzzlePiece240" x1="5.833" x2="16.883" y1=".889" y2="21.761" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPuzzlePiece241" x1="14.131" x2="18.725" y1="4.456" y2="23.861" gradientUnits="userSpaceOnUse"><svg:stop offset=".533" stop-color="#FF6CE8" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#FF6CE8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPuzzlePiece24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
