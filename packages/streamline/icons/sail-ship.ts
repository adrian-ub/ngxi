import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSailShipIcon],svg[streamline-sail-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 9.5H.5l1 2.7a2 2 0 0 0 1.88 1.3h7.22a2 2 0 0 0 1.88-1.3zm-7 0v-9m0 0l-5 6h5m2-4l3.5 4H8.5"></svg:path>`,
})
export class StreamlineSailShipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
