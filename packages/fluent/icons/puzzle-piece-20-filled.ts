import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzlePiece20FilledIcon],svg[fluent-puzzle-piece-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2a2 2 0 0 0-2 2H6.5A1.5 1.5 0 0 0 5 5.5V8a2 2 0 1 0 0 4v2.5A1.5 1.5 0 0 0 6.5 16H9a2 2 0 1 0 4 0h2.5a1.5 1.5 0 0 0 1.5-1.5V12h-1a2 2 0 1 1 0-4h1V5.5A1.5 1.5 0 0 0 15.5 4H13a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentPuzzlePiece20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
