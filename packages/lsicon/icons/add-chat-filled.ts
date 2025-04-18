import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatFilledIcon],svg[lsicon-add-chat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-6 6v6h6A6 6 0 0 0 8 2m-.5 3v2.5H5v1h2.5V11h1V8.5H11v-1H8.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddChatFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
