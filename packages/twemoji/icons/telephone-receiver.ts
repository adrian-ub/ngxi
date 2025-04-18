import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTelephoneReceiverIcon],svg[twemoji-telephone-receiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="m34.06 26.407l-3.496-3.496a4.942 4.942 0 0 0-8.34 2.528c-5.765-1.078-11.372-6.662-11.721-11.653a4.9 4.9 0 0 0 2.586-1.36a4.943 4.943 0 0 0 0-6.99L9.594 1.94a4.943 4.943 0 0 0-6.99 0C-7.882 12.426 23.574 43.882 34.06 33.396a4.944 4.944 0 0 0 0-6.989"></svg:path>`,
})
export class TwemojiTelephoneReceiverIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
