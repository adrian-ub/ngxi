import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditAttachment2AttachmentLinkPaperclipUnlinkIcon],svg[streamline-interface-edit-attachment-2-attachment-link-paperclip-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.75 11.5V3A2.5 2.5 0 0 0 8.25.5h-2.5A2.5 2.5 0 0 0 3.25 3v8.5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v5.5"></svg:path>`,
})
export class StreamlineInterfaceEditAttachment2AttachmentLinkPaperclipUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
