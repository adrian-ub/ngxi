import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFilmstripSplit20FilledIcon],svg[fluent-filmstrip-split-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zM2 7a3 3 0 0 1 3-3h3.5v12H5a3 3 0 0 1-3-3zm2.5-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5M4 13.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5m7 7V4H15a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zM15 7.5a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0zm.5 4.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5M15 9.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0"></svg:path>`,
})
export class FluentFilmstripSplit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
