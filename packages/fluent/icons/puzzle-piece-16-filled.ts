import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzlePiece16FilledIcon],svg[fluent-puzzle-piece-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1a2 2 0 0 0-2 2H5.5A1.5 1.5 0 0 0 4 4.5V6a2 2 0 0 0 0 4v1.5A1.5 1.5 0 0 0 5.5 13H7a2 2 0 0 0 4 0h1.5a1.5 1.5 0 0 0 1.5-1.5V9h-1a1 1 0 1 1 0-2h1V4.5A1.5 1.5 0 0 0 12.5 3H11a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentPuzzlePiece16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
