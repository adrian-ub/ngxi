import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiAttachmentIcon],svg[ooui-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 19.75a4.25 4.25 0 0 1-4.25-4.25V9a2.75 2.75 0 0 1 5.5 0v6h-1.5V9a1.25 1.25 0 0 0-2.5 0v6.5a2.75 2.75 0 0 0 5.5 0V4a2.25 2.25 0 0 0-4.5 0v1h-1.5V4a3.75 3.75 0 0 1 7.5 0v11.5a4.25 4.25 0 0 1-4.25 4.25"></svg:path>`,
})
export class OouiAttachmentIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
