import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatAdd16FilledIcon],svg[fluent-chat-add-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 1-3.004 11.195l-2.338.78a.5.5 0 0 1-.639-.612l.712-2.491A6 6 0 0 1 8 2m.5 3.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2z"></svg:path>`,
})
export class FluentChatAdd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
