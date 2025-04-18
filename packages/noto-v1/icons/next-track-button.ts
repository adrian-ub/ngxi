import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1NextTrackButtonIcon],svg[noto-v1-next-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#40c0e7"><svg:path d="m6.24 95.18l48.94-28.26v28.26L109.17 64L55.18 32.82v28.26L6.24 32.82z"></svg:path><svg:path d="M104.18 33.23h17.58v61.54h-17.58z"></svg:path></svg:g>`,
})
export class NotoV1NextTrackButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
