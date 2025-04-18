import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCallInbound28FilledIcon],svg[fluent-call-inbound-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.78 3.28a.75.75 0 1 0-1.06-1.06l-8.22 8.22V4.25a.75.75 0 0 0-1.5 0v8c0 .414.336.75.75.75h8a.75.75 0 0 0 0-1.5h-6.19zM4.091 2.883c1.12-.72 2.553-.995 3.968-.802l.246.033a2.75 2.75 0 0 1 2.088 1.495l1.29 2.582a3.25 3.25 0 0 1-1.103 4.157l-1.708 1.139c-.397.264-.508.631-.42.9c.53 1.614 1.94 3.801 3.169 5.055c.231.235.647.305 1.076.069L14 16.794a3.75 3.75 0 0 1 5.099 1.49l1.042 1.911a2.75 2.75 0 0 1 .014 2.609c-1.45 2.725-4.757 4.238-7.563 2.401c-2.394-1.566-5.336-4.161-7.743-8.33c-2.442-4.23-2.931-7.896-2.78-10.55c.087-1.532.886-2.713 2.021-3.442"></svg:path>`,
})
export class FluentCallInbound28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
