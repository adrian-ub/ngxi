import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatCursor16FilledIcon],svg[fluent-chat-cursor-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a5 5 0 1 1 9.888 1.057L9.861 5.398c-1.142-.935-2.858-.122-2.858 1.354L7.002 11H7a5 5 0 0 1-2.41-.618l-1.944.592a.5.5 0 0 1-.624-.624l.592-1.947A5 5 0 0 1 2 6m7.228.172l5.496 4.498c.546.446.23 1.33-.475 1.33h-2.986a.5.5 0 0 0-.399.199L9.35 14.204c-.433.574-1.348.267-1.348-.452l.002-7q0-.06.008-.115a.75.75 0 0 1 1.217-.465"></svg:path>`,
})
export class FluentChatCursor16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
