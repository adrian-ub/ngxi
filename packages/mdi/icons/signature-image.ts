import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSignatureImageIcon],svg[mdi-signature-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zM6.2 17.3l-1.4-1.4l1.4-1.4l-.7-.7l-1.4 1.4l-1.4-1.4l-.7.7l1.4 1.4L2 17.3l.7.7l1.4-1.4L5.5 18zM20 5H10a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M10 16l2.6-3.3l1.8 2.2l2.4-3.3L20 16z"></svg:path>`,
})
export class MdiSignatureImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
