import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentList28FilledIcon],svg[fluent-list-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 14a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1-8a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentList28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
