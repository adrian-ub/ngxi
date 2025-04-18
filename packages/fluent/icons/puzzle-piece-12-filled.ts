import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzlePiece12FilledIcon],svg[fluent-puzzle-piece-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 0A1.5 1.5 0 0 0 5 1.5V2H4a1 1 0 0 0-1 1v1h-.5a1.5 1.5 0 1 0 0 3H3v1a1 1 0 0 0 1 1h1v.5a1.5 1.5 0 0 0 3 0V9h1a1 1 0 0 0 1-1V6H8.5a.5.5 0 0 1 0-1H10V3a1 1 0 0 0-1-1H8v-.5A1.5 1.5 0 0 0 6.5 0"></svg:path>`,
})
export class FluentPuzzlePiece12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
