import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFormMultiple20FilledIcon],svg[fluent-form-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M6 3h6a3 3 0 0 1 3 3v6a2.99 2.99 0 0 1-1.262 2.445A2.98 2.98 0 0 1 12 15H6a2.99 2.99 0 0 1-2.445-1.262A3 3 0 0 1 3 12V6a3 3 0 0 1 3-3m-.5 3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm1 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m3-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M5.764 16c.55.614 1.348 1 2.236 1h4.5a4.5 4.5 0 0 0 4.5-4.5V8c0-.888-.386-1.687-1-2.236V12.5q0 .18-.018.358A3.5 3.5 0 0 1 12.5 16z"></svg:path></svg:g>`,
})
export class FluentFormMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
