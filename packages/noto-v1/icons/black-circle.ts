import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1BlackCircleIcon],svg[noto-v1-black-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212121" d="M212 32.2c-17.56 0-31.79 14.23-31.79 31.79S194.44 95.8 212 95.8s31.79-14.25 31.79-31.82S229.56 32.2 212 32.2M64 24.3c-21.92 0-39.69 17.78-39.69 39.71S42.08 103.7 64 103.7s39.69-17.77 39.69-39.69S85.92 24.3 64 24.3"></svg:path>`,
})
export class NotoV1BlackCircleIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
