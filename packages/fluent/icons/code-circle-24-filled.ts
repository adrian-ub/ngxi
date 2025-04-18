import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeCircle24FilledIcon],svg[fluent-code-circle-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-7.06-4.954l-4.5 10.5a.75.75 0 0 1-1.38-.591l4.5-10.5a.75.75 0 0 1 1.38.59m-6.188 3.261L6.872 12l1.88 1.693a.75.75 0 0 1-1.004 1.114l-2.5-2.25a.75.75 0 0 1 0-1.114l2.5-2.25a.75.75 0 0 1 1.004 1.114m6.44-1.059a.75.75 0 0 1 1.06-.055l2.5 2.25a.75.75 0 0 1 0 1.114l-2.5 2.25a.75.75 0 0 1-1.004-1.114L17.128 12l-1.88-1.693a.75.75 0 0 1-.055-1.059"></svg:path>`,
})
export class FluentCodeCircle24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
