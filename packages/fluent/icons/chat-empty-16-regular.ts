import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatEmpty16RegularIcon],svg[fluent-chat-empty-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 2.996 5.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 2 8m6-5a5 5 0 0 0-4.3 7.552a.5.5 0 0 1 .05.393l-.509 1.78l1.658-.552a.5.5 0 0 1 .426.052A5 5 0 1 0 8 3"></svg:path>`,
})
export class FluentChatEmpty16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
