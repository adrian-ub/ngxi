import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMessageOffOutlineIcon],svg[mdi-message-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.2 4l-2-2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75L19.2 16h.8V4zm14.91 17.46l-1.27 1.27L16.11 18H6l-4 4V3.9L1.11 3l1.28-1.27L6.1 5.44L16.65 16h.01l2 2h-.01zm-8-5.46L4 5.89V18l2-2z"></svg:path>`,
})
export class MdiMessageOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
