import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineStyle24FilledIcon],svg[fluent-line-style-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm7.5 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zM18 5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1.5 5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3z"></svg:path>`,
})
export class FluentLineStyle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
