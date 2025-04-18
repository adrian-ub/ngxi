import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzlePiece32FilledIcon],svg[fluent-puzzle-piece-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 0-3 3v1H9.75A2.75 2.75 0 0 0 7 8.75V13H6a3 3 0 1 0 0 6h1v4.25A2.75 2.75 0 0 0 9.75 26H14v1a3 3 0 1 0 6 0v-1h4.25A2.75 2.75 0 0 0 27 23.25V19h-2a3 3 0 1 1 0-6h2V8.75A2.75 2.75 0 0 0 24.25 6H20V5a3 3 0 0 0-3-3"></svg:path>`,
})
export class FluentPuzzlePiece32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
