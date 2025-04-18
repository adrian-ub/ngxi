import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSendReplyEmailReplyMessageActionsActionArrowIcon],svg[streamline-mail-send-reply-email-reply-message-actions-action-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 12.5C10.58 10 9.86 9 7 9H5.5v3l-5-5.5l5-5v3h1c5 0 6 5 7 8Z"></svg:path>`,
})
export class StreamlineMailSendReplyEmailReplyMessageActionsActionArrowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
