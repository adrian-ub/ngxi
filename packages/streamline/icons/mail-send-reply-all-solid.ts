import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSendReplyAllSolidIcon],svg[streamline-mail-send-reply-all-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.014 2.553a.75.75 0 0 0-1.28-.53L4.006 4.75a.75.75 0 0 0 0 1.06l2.728 2.728a.75.75 0 0 0 1.28-.53V6.03h1.58a2.886 2.886 0 0 1 2.887 2.886v1.818a.75.75 0 0 0 1.5 0V8.917A4.386 4.386 0 0 0 9.595 4.53H8.014zm-3.987.53a.75.75 0 0 0-1.061-1.06L.239 4.75a.75.75 0 0 0 0 1.06l2.727 2.728a.75.75 0 1 0 1.06-1.06L1.83 5.28z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMailSendReplyAllSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
