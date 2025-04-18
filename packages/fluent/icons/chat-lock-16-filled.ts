import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatLock16FilledIcon],svg[fluent-chat-lock-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1a6 6 0 0 0-5.27 8.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779C4.88 12.707 5.906 13 7 13v-3a2 2 0 0 1 1.5-1.937V8a3 3 0 0 1 4.247-2.73A6 6 0 0 0 7 1m2.5 8V8a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm1-1v1h2V8a1 1 0 1 0-2 0m1.75 4a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class FluentChatLock16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
