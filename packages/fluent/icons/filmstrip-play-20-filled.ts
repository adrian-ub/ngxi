import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilmstripPlay20FilledIcon],svg[fluent-filmstrip-play-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm10.5 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-.5 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm.5-3.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M4 6.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm.5 5.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M4 9.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm4-1.374c0-.483.46-.783.828-.54l2.94 1.953c.31.206.31.716 0 .922l-2.94 1.953c-.367.243-.828-.057-.828-.54z"></svg:path>`,
})
export class FluentFilmstripPlay20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
