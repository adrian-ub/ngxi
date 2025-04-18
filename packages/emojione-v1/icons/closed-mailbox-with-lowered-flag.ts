import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ClosedMailboxWithLoweredFlagIcon],svg[emojione-v1-closed-mailbox-with-lowered-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#dfad92" d="M25.16 64h13.152c.109 0 .2-.289.2-.625V23.12c0-.338-.091-.625-.2-.625H25.16c-.06 0-.104.065-.139.168v.021s-.004.002-.006.021a1.4 1.4 0 0 0-.053.417v40.256c0 .333.088.622.199.622"></svg:path><svg:g fill="#a4806d"><svg:path d="M31.11 64h7.289c.063 0 .111-.289.111-.625V23.12c0-.338-.05-.625-.111-.625h-7.288c-.033 0-.058.065-.074.168l-.002.021s-.002.002-.004.021c-.019.09-.031.236-.031.417v40.256c0 .333.05.622.11.622"></svg:path><svg:path d="M25.16 46.635h13.148c.109 0 .2-.062.2-.135v-8.791c0-.074-.091-.139-.2-.139H25.156a.26.26 0 0 0-.135.037s0 .004-.004.004l-.008.006a.11.11 0 0 0-.051.09V46.5c0 .074.088.135.199.135"></svg:path></svg:g><svg:g fill="#7c9c9f"><svg:path d="M21.392 11.238H10.085c-5.567 0-10.09 6.172-10.09 13.783v16.802h11.309V25.021c0-7.611 4.513-13.783 10.08-13.783"></svg:path><svg:path d="M47.725 11.238H21.392c-5.569 0-10.08 6.172-10.08 13.783v16.802h46.495V25.021c0-7.611-4.514-13.783-10.08-13.783"></svg:path></svg:g><svg:path fill="#627c7f" d="M23.25 11.238H10.084c-5.567 0-10.09 6.172-10.09 13.783v16.802h33.334V25.021c0-7.611-4.514-13.783-10.08-13.783"></svg:path><svg:path fill="#de374b" d="M63.906 28.516c.004.006.025.008.025.014v12.063a.3.3 0 0 1-.025.123s-.004 0-.004.002H63.9c-.018.025-.039.047-.069.047H57.3c-.058 0-.101-.082-.101-.184v-6.566H37.362c-.217 0-.404-.039-.404-.082v-5.414c0-.047.188-.084.404-.084h26.469c.032 0 .058.03.075.071"></svg:path><svg:path fill="#7c9c9f" d="M22.293 13.196H9.972c-5.21 0-9.437 5.776-9.437 12.901v15.726h31.2V26.097c0-7.125-4.225-12.901-9.442-12.901"></svg:path>`,
})
export class EmojioneV1ClosedMailboxWithLoweredFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
