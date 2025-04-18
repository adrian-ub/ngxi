import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatEmpty20FilledIcon],svg[fluent-chat-empty-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a8 8 0 1 0-16 0l.007.346l.026.382a8 8 0 0 0 .829 2.887l.063.12l-.91 3.644l-.014.083v.082a.5.5 0 0 0 .62.441l3.645-.91l.12.064A8 8 0 0 0 18 10"></svg:path>`,
})
export class FluentChatEmpty20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
