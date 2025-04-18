import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailInbox32FilledIcon],svg[fluent-mail-inbox-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5V16h7a1 1 0 0 1 1 1v1a3 3 0 1 0 6 0v-1a1 1 0 0 1 1-1h7V7.5A2.5 2.5 0 0 0 24.5 5z"></svg:path>`,
})
export class FluentMailInbox32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
