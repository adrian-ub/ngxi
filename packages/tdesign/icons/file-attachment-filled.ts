import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileAttachmentFilledIcon],svg[tdesign-file-attachment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586v6.085a4.5 4.5 0 0 0-8 2.829v6c0 .526.09 1.03.256 1.5H3zm11.5 2v4.5H19z"></svg:path><svg:path fill="currentColor" d="M17.5 13a2.5 2.5 0 0 0-2.5 2.5V20a4 4 0 0 0 8 0v-4.5h-2V20a2 2 0 1 1-4 0v-4.5a.5.5 0 0 1 1 0V20h2v-4.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class TdesignFileAttachmentFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
