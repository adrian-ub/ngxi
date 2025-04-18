import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkChatUnreadRoundedIcon],svg[material-symbols-light-mark-chat-unread-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.002 6.462q-1.04 0-1.771-.729t-.731-1.77t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732M6.077 17l-1.704 1.704q-.379.379-.876.171T3 18.133V4.616q0-.691.463-1.153T4.615 3h9.216q.308 0 .51.233t.159.536q0 1.048.382 1.914t1.026 1.513q.611.583 1.405.924q.793.342 1.687.342q.265 0 .53-.031q.264-.03.514-.102q.367-.079.662.117q.294.196.294.552v6.386q0 .691-.462 1.154T19.385 17z"></svg:path>`,
})
export class MaterialSymbolsLightMarkChatUnreadRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
