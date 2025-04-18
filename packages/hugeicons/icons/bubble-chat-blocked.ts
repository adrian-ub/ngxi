import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatBlockedIcon],svg[hugeicons-bubble-chat-blocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 18.835a10.23 10.23 0 0 1-6.5 2.298q-.977 0-1.935-.18c-.459-.085-.688-.128-.848-.104s-.388.145-.842.387a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.35c.1-.53-.148-1.045-.52-1.422C3.034 16.408 2 14.1 2 11.56S3.033 6.713 4.719 5M7.5 3.021A10.3 10.3 0 0 1 12 2c5.522 0 10 4.284 10 9.567c0 1.6-.41 3.108-1.137 4.433M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsBubbleChatBlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
