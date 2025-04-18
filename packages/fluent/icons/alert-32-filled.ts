import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlert32FilledIcon],svg[fluent-alert-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13a9 9 0 0 1 18 0v3.807l1.928 4.822A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807zm5.125 12A3.99 3.99 0 0 0 16 28a3.99 3.99 0 0 0 3.875-3z"></svg:path>`,
})
export class FluentAlert32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
