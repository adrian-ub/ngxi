import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileAttachmentIcon],svg[tdesign-file-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V12h-2V9h-6V3H5v18h7v2H3zm12 2.414V7h3.586zM14 15.5a2.5 2.5 0 0 1 5 0V20h-2v-4.5a.5.5 0 0 0-1 0V20a2 2 0 1 0 4 0v-4h2v4a4 4 0 0 1-8 0z"></svg:path>`,
})
export class TdesignFileAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
