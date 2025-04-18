import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWarning16FilledIcon],svg[fluent-warning-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.092 2.638a1.25 1.25 0 0 0-2.182 0L2.157 11.14A1.25 1.25 0 0 0 3.247 13h9.504a1.25 1.25 0 0 0 1.091-1.86zM8.75 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.5 8V5.5a.5.5 0 0 1 1 0V8a.5.5 0 0 1-1 0"></svg:path>`,
})
export class FluentWarning16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
