import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatIncomeIcon],svg[hugeicons-bubble-chat-income-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.766 9.493c.153.666.234 1.358.234 2.068c0 5.286-4.478 9.572-10 9.572a10.4 10.4 0 0 1-1.935-.18c-.459-.085-.688-.129-.848-.104c-.16.024-.388.145-.842.387a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.35c.1-.53-.148-1.045-.52-1.422C3.034 16.408 2 14.1 2 11.56C2 6.435 6.21 2.249 11.5 2"></svg:path><svg:path d="M14 4.5h8m-8 0c0 .7 1.994 2.008 2.5 2.5M14 4.5c0-.7 1.994-2.008 2.5-2.5m-4.504 10h.008m3.987 0H16m-8 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatIncomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
