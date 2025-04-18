import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVideoChatIcon],svg[carbon-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12h9v2H8zm0 5h5v2H8z"></svg:path><svg:path fill="currentColor" d="M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.057l5.419-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.581.814L23 19.944V24a2 2 0 0 1-2 2M4 8v16.001L21 24v-6a1 1 0 0 1 1.581-.813L28 21.057V10.943l-5.419 3.87A1 1 0 0 1 21 14V8Z"></svg:path>`,
})
export class CarbonVideoChatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
