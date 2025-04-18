import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentToggleMultiple24FilledIcon],svg[fluent-toggle-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5A4.5 4.5 0 0 1 6.5 2h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 6.5m4.5 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 4.5a4.5 4.5 0 1 0 0 9h11a4.5 4.5 0 1 0 0-9zm13 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentToggleMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
