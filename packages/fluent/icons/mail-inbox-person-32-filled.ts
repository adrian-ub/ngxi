import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailInboxPerson32FilledIcon],svg[fluent-mail-inbox-person-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h10.71a4.93 4.93 0 0 1-.71-2.562c0-2.148 1.738-3.938 3.917-3.938h.012A4.98 4.98 0 0 1 20 19c0-1.126.372-2.164 1-3h-1a1 1 0 0 0-1 1v1a3 3 0 1 1-6 0v-1a1 1 0 0 0-1-1H5V7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v6.916a5 5 0 0 1 2 1.583V7.5A4.5 4.5 0 0 0 24.5 3zm21 16a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m2.5 7.438c0 2.023-1.714 4.062-6 4.062s-6-2.031-6-4.062C19 25.102 20.082 24 21.417 24h7.166C29.918 24 31 25.102 31 26.438"></svg:path>`,
})
export class FluentMailInboxPerson32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
