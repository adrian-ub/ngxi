import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCouch12FilledIcon],svg[fluent-couch-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2h-5A1.5 1.5 0 0 0 2 3.5v.514Q2.123 4 2.25 4a2.25 2.25 0 0 1 2.236 2h3.028A2.25 2.25 0 0 1 10 4.014V3.5A1.5 1.5 0 0 0 8.5 2m1.25 3q.13 0 .25.025c.57.116 1 .62 1 1.225V8.5a1.5 1.5 0 0 1-1 1.415v.585a.5.5 0 0 1-1 0V10H3v.5a.5.5 0 0 1-1 0v-.585A1.5 1.5 0 0 1 1 8.5V6.25a1.25 1.25 0 0 1 2.5 0c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75C8.5 5.56 9.06 5 9.75 5"></svg:path>`,
})
export class FluentCouch12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
