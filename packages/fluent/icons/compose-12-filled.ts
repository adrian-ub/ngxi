import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose12FilledIcon],svg[fluent-compose-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.78 2.28a.75.75 0 1 0-1.06-1.06L5.44 5.5L5 7l1.5-.44zM6.25 1.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h4.5A.75.75 0 0 0 9 8.25v-2.5a.75.75 0 0 1 1.5 0v2.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 1.5 8.25v-4.5A2.25 2.25 0 0 1 3.75 1.5z"></svg:path>`,
})
export class FluentCompose12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
