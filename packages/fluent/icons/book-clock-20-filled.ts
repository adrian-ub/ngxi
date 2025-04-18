import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookClock20FilledIcon],svg[fluent-book-clock-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2zm6 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-.5-6a.5.5 0 0 1 .5.5V9h1a.5.5 0 0 1 0 1H9.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentBookClock20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
