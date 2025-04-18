import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSendReplyAllIcon],svg[streamline-mail-send-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.5 2.5l-3 3l3 3"></svg:path><svg:path d="M13.5 11.5v-2a4 4 0 0 0-4-4h-5m-1-3l-3 3l3 3"></svg:path></svg:g>`,
})
export class StreamlineMailSendReplyAllIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
