import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAttachmentsOutlineIcon],svg[lsicon-attachments-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m3.757 8l-.353-.354a3 3 0 0 1 4.242-4.242l4.95 4.95a3 3 0 1 1-4.242 4.242l-.708-.707m.354.354l-1.591-1.591a1.25 1.25 0 0 1 1.768-1.768l2.298 2.298"></svg:path>`,
})
export class LsiconAttachmentsOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
