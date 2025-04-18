import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatEmpty12FilledIcon],svg[fluent-chat-empty-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 0 0-4.386 7.403l-.592 1.947a.5.5 0 0 0 .624.624l1.945-.592A5 5 0 1 0 6 1"></svg:path>`,
})
export class FluentChatEmpty12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
