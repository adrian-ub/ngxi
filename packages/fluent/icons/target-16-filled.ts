import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTarget16FilledIcon],svg[fluent-target-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-4.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"></svg:path>`,
})
export class FluentTarget16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
