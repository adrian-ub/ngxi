import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailInboxPerson48FilledIcon],svg[fluent-mail-inbox-person-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h14.17a7.6 7.6 0 0 1-.42-2.5v-.502A5 5 0 0 1 31 34h1.101A6.98 6.98 0 0 1 30 29a6.98 6.98 0 0 1 2.101-5H29.75c-.69 0-1.25.56-1.25 1.25v1.25a4.5 4.5 0 1 1-9 0v-1.25c0-.69-.56-1.25-1.25-1.25H8.5V12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v10.21c.95.363 1.8.927 2.5 1.641V12.25A6.25 6.25 0 0 0 35.75 6zM42 29a5 5 0 1 1-10 0a5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"></svg:path>`,
})
export class FluentMailInboxPerson48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
