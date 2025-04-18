import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsImageFrameIcon],svg[pixelarticons-image-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1h-2v2H9v2H7v2H2v16h20V7h-5V5h-2V3h-2zm2 6H9V5h2V3h2v2h2zM4 9h16v12H4zm10 6v-2h-2v2h-2v2H8v2h2v-2h2v-2zm2 2v-2h-2v2zm0 0v2h2v-2zM6 13v-2h2v2z"></svg:path>`,
})
export class PixelarticonsImageFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
