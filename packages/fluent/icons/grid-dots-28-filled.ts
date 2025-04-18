import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridDots28FilledIcon],svg[fluent-grid-dots-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5-8.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M14 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m8.5 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-17 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></svg:path>`,
})
export class FluentGridDots28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
