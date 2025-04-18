import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatCursor16RegularIcon],svg[fluent-chat-cursor-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a5 5 0 1 1 9.887 1.06l-.9-.737Q11 6.163 11 6a4 4 0 1 0-7.417 2.08a.5.5 0 0 1 .051.406l-.383 1.259l1.257-.383a.5.5 0 0 1 .407.052A4 4 0 0 0 6.998 10v1a5 5 0 0 1-2.407-.618l-1.945.592a.5.5 0 0 1-.624-.624l.592-1.947A5 5 0 0 1 2 6m12.72 4.67c.546.447.23 1.33-.475 1.33H11.26a.5.5 0 0 0-.399.2l-1.514 2.005c-.434.574-1.35.267-1.349-.453L8 6.754a.75.75 0 0 1 1.225-.58z"></svg:path>`,
})
export class FluentChatCursor16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
