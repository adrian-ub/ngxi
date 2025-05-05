import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChatIcon],svg[picon-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6L0 8V2h3V0h5v6L6 4H5v2M1 5h3V3H1m3 0h3V1H4"></svg:path>`,
})
export class PiconChatIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
