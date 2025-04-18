import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatCursor24FilledIcon],svg[fluent-chat-cursor-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1a8 8 0 0 1 7.475 10.856L14.2 9.4C12.882 8.411 11 9.352 11 11v5.938Q10.508 17 10 17a8 8 0 0 1-3.613-.86l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 9a8 8 0 0 1 8-8m3.6 9.2l8 6c.769.577.361 1.8-.6 1.8h-4.4a1 1 0 0 0-.882.53l-1.836 3.44c-.49.92-1.882.571-1.882-.47V11q0-.078.01-.15a1.002 1.002 0 0 1 1.59-.65"></svg:path>`,
})
export class FluentChatCursor24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
