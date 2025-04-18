import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCode20FilledIcon],svg[fluent-code-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.937 4.052a.75.75 0 0 0-1.373-.604l-5.5 12.5a.75.75 0 1 0 1.372.604zm1.356 9.793a.75.75 0 0 1-.137-1.052L16.304 10l-2.148-2.793a.75.75 0 0 1 1.188-.914l2.5 3.25a.75.75 0 0 1 0 .915l-2.5 3.25a.75.75 0 0 1-1.051.137m-8.586-7.69a.75.75 0 0 1 .137 1.053L3.696 10l2.148 2.793a.75.75 0 1 1-1.188.915l-2.5-3.25a.75.75 0 0 1 0-.915l2.5-3.25a.75.75 0 0 1 1.051-.137"></svg:path>`,
})
export class FluentCode20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
