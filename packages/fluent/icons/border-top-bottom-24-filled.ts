import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderTopBottom24FilledIcon],svg[fluent-border-top-bottom-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7a1 1 0 0 1-1-1a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3a1 1 0 1 1-2 0a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1a1 1 0 0 1-1 1m1 4a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm14 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zM3 18a1 1 0 1 1 2 0a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1a1 1 0 1 1 2 0a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"></svg:path>`,
})
export class FluentBorderTopBottom24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
