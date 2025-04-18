import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatDoneIcon],svg[hugeicons-bubble-chat-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2C6.478 2 2 6.284 2 11.567c0 2.538 1.033 4.845 2.719 6.556c.371.377.619.892.519 1.422a5.3 5.3 0 0 1-1.087 2.348a6.5 6.5 0 0 0 4.224-.657c.454-.241.681-.362.842-.386s.39.018.848.104c.638.12 1.286.18 1.935.18c5.522 0 10-4.284 10-9.567c0-.89-.127-1.75-.364-2.567"></svg:path><svg:path d="M14 6s1 0 2 2c0 0 3.177-5 6-6M11.996 12h.008m3.987 0H16m-8 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
