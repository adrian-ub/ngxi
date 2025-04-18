import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClipboardLetter16FilledIcon],svg[fluent-clipboard-letter-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v3.716l-.13-.302a1.5 1.5 0 0 0-2.757 0l-2.1 4.904q-.045.09-.079.187l-.817 1.91A1.5 1.5 0 0 0 7.08 15H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path><svg:path d="M11.49 7.005a.5.5 0 0 0-.458.303l-2.115 4.943a.5.5 0 0 0-.046.107l-.835 1.95a.5.5 0 1 0 .92.394L9.683 13h3.621l.73 1.702a.5.5 0 0 0 .92-.394l-.837-1.95a.5.5 0 0 0-.046-.107l-2.12-4.943a.5.5 0 0 0-.46-.303m0 1.77L12.876 12h-2.764z"></svg:path></svg:g>`,
})
export class FluentClipboardLetter16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
