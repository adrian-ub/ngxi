import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riImageCircleFillIcon],svg[ri-image-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.576 14.576l-3.869-3.869a1 1 0 0 0-1.414 0l-7.428 7.428a8 8 0 1 1 12.711-3.559M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1-12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class RiImageCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
