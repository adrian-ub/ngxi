import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSendForwardEmailEmailSendMessageEnvelopeActionsActionForwardArrowIcon],svg[streamline-mail-send-forward-email-email-send-message-envelope-actions-action-forward-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 12.5C3.42 10 4.14 9 7 9h1.5v3l5-5.5l-5-5v3h-1c-5 0-6 5-7 8Z"></svg:path>`,
})
export class StreamlineMailSendForwardEmailEmailSendMessageEnvelopeActionsActionForwardArrowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
