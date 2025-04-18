import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilmstrip32FilledIcon],svg[fluent-filmstrip-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 23.5zM25 9v2a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0m1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m-1 7v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0M6 8a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1m-1 7v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0m1 5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentFilmstrip32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
