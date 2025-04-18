import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAttachmentLineIcon],svg[ri-attachment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.5V8a4 4 0 0 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 0 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 1 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class RiAttachmentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
