import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpVideoChatIcon],svg[ic-sharp-video-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v20l4-4h16V2zm15 11l-2-1.99V14H7V6h8v2.99L17 7z"></svg:path>`,
})
export class IcSharpVideoChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
