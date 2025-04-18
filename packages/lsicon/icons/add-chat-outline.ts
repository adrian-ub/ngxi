import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatOutlineIcon],svg[lsicon-add-chat-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 8h6M8 5v6m-5.5 2.5H8A5.5 5.5 0 1 0 2.5 8z"></svg:path>`,
})
export class LsiconAddChatOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
