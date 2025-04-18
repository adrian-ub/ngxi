import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzlePiece28FilledIcon],svg[fluent-puzzle-piece-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a3 3 0 0 0-3 3v1H9.25A2.25 2.25 0 0 0 7 8.25V11H6a3 3 0 1 0 0 6h1v2.75A2.25 2.25 0 0 0 9.25 22H12v1a3 3 0 1 0 6 0v-1h2.75A2.25 2.25 0 0 0 23 19.75V16h-2a2 2 0 1 1 0-4h2V8.25A2.25 2.25 0 0 0 20.75 6H18V5a3 3 0 0 0-3-3"></svg:path>`,
})
export class FluentPuzzlePiece28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
