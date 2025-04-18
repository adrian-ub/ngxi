import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1LastTrackButtonIcon],svg[noto-v1-last-track-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#40c0e7"><svg:path d="M121.76 32.82L72.82 61.08V32.82L18.83 64l53.99 31.18V66.92l48.94 28.26z"></svg:path><svg:path d="M6.24 33.23h17.58v61.54H6.24z"></svg:path></svg:g>`,
})
export class NotoV1LastTrackButtonIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
