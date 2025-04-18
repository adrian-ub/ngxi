import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPuzzlePiece48FilledIcon],svg[fluent-puzzle-piece-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 4a5 5 0 0 0-5 5v1h-5.25A3.75 3.75 0 0 0 11 13.75V19h-1a5 5 0 0 0 0 10h1v5.25A3.75 3.75 0 0 0 14.75 38H20v1a5 5 0 0 0 10 0v-1h5.25A3.75 3.75 0 0 0 39 34.25V28h-3a4 4 0 0 1 0-8h3v-6.25A3.75 3.75 0 0 0 35.25 10H30V9a5 5 0 0 0-5-5"></svg:path>`,
})
export class FluentPuzzlePiece48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
