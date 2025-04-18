import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSendEnvelopeEnvelopeEmailMessageUnopenedSealedCloseIcon],svg[streamline-mail-send-envelope-envelope-email-message-unopened-sealed-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="10.5" x=".5" y="1.75" rx="1"></svg:rect><svg:path d="m.5 3l5.86 5a1 1 0 0 0 1.28 0l5.86-5"></svg:path></svg:g>`,
})
export class StreamlineMailSendEnvelopeEnvelopeEmailMessageUnopenedSealedCloseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
