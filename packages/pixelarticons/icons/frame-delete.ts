import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFrameDeleteIcon],svg[pixelarticons-frame-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v18H2zm18 16V7H4v12zM9 10h2v2H9zm4 2h-2v2H9v2h2v-2h2v2h2v-2h-2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsFrameDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
