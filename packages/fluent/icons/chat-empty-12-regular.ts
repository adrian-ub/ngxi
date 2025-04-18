import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatEmpty12RegularIcon],svg[fluent-chat-empty-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6a5 5 0 1 1 2.59 4.382l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A5 5 0 0 1 1 6m5-4a4 4 0 0 0-3.417 6.08a.5.5 0 0 1 .051.406l-.383 1.259l1.257-.383a.5.5 0 0 1 .407.052A4 4 0 1 0 6 2"></svg:path>`,
})
export class FluentChatEmpty12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
