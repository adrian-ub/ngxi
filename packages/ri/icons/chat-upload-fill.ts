import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatUploadFillIcon],svg[ri-chat-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM13 11h3l-4-4l-4 4h3v4h2z"></svg:path>`,
})
export class RiChatUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
