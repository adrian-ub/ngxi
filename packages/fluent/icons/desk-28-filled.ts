import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesk28FilledIcon],svg[fluent-desk-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.754 4a2.75 2.75 0 0 0-2.75 2.75V9H24.5v14.25a.75.75 0 0 0 1.5 0V6.75A2.75 2.75 0 0 0 23.25 4zM14 10.5H2.004v9.75A3.75 3.75 0 0 0 5.754 24h4.496A3.75 3.75 0 0 0 14 20.25zm-8.5 4.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentDesk28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
