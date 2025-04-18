import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFilePrescriptionIcon],svg[la-file-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM11 11v9h2v-3h.6l2.5 4.4L14 25h2l1-1.8l1 1.8h2l-2-3.6l2-3.4h-2l-1 1.7l-1.7-3c1-.5 1.6-1.5 1.6-2.7c0-1.6-1.4-3-3-3zm2 2h1c.6 0 1 .4 1 1s-.4 1-1 1h-1z"></svg:path>`,
})
export class LaFilePrescriptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
