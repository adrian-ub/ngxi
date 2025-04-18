import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopEmojiSolidIcon],svg[streamline-desktop-emoji-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.457.252C.652.252 0 .905 0 1.71v7.587c0 .804.652 1.456 1.457 1.456h4.026l-.535 1.496H4a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-.948l-.535-1.496h4.026c.805 0 1.457-.652 1.457-1.456V1.709c0-.804-.652-1.457-1.457-1.457zm3.545 6.134a.625.625 0 0 0-.89.876C4.705 7.867 5.707 8.377 7 8.377s2.294-.51 2.889-1.115a.625.625 0 1 0-.891-.876c-.359.364-1.04.741-1.998.741c-.959 0-1.64-.377-1.998-.741m1.014-2.383a.766.766 0 1 1-1.531 0a.766.766 0 0 1 1.53 0Zm2.734.765a.766.766 0 1 0 0-1.531a.766.766 0 0 0 0 1.531" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDesktopEmojiSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
