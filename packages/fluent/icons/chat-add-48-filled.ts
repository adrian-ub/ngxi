import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatAdd48FilledIcon],svg[fluent-chat-add-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20c-3.45 0-6.698-.874-9.533-2.414L6.23 43.928c-1.319.375-2.537-.844-2.162-2.162l2.342-8.238A19.9 19.9 0 0 1 4 24C4 12.954 12.954 4 24 4m1.25 11.25a1.25 1.25 0 1 0-2.5 0v7.5h-7.5a1.25 1.25 0 1 0 0 2.5h7.5v7.5a1.25 1.25 0 1 0 2.5 0v-7.5h7.5a1.25 1.25 0 1 0 0-2.5h-7.5z"></svg:path>`,
})
export class FluentChatAdd48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
