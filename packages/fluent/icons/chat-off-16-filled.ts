import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChatOff16FilledIcon],svg[fluent-chat-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.874 12.582l2.272 2.272a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l2.272 2.272A5.98 5.98 0 0 0 2 8c0 1.04.265 2.019.73 2.872l-.71 2.49a.5.5 0 0 0 .638.612l2.338-.779C5.88 13.707 6.906 14 8 14c1.477 0 2.83-.534 3.874-1.418m-3.14-3.14A.5.5 0 0 1 8.5 9.5h-2a.5.5 0 0 1 0-1h1.293zM10 7a.5.5 0 0 1-.39.488l3.56 3.56A6 6 0 0 0 4.952 2.83L8.62 6.5h.88a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentChatOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
