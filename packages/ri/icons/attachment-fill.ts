import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAttachmentFillIcon],svg[ri-attachment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.997 2.992L21 21.008a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.01c.549 0 .994.444.994.992M9 13V9a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V9a3 3 0 1 0-6 0v4a5 5 0 0 0 10 0V8h-2v5a3 3 0 1 1-6 0"></svg:path>`,
})
export class RiAttachmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
