import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChatRoundedIcon],svg[material-symbols-light-chat-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.077 17l-1.704 1.704q-.379.379-.876.171T3 18.133V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17zM7 13.5h6q.213 0 .356-.144t.144-.357t-.144-.356T13 12.5H7q-.213 0-.356.144t-.144.357t.144.356T7 13.5m0-3h10q.213 0 .356-.144t.144-.357t-.144-.356T17 9.5H7q-.213 0-.356.144t-.144.357t.144.356T7 10.5m0-3h10q.213 0 .356-.144t.144-.357t-.144-.356T17 6.5H7q-.213 0-.356.144t-.144.357t.144.356T7 7.5"></svg:path>`,
})
export class MaterialSymbolsLightChatRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
