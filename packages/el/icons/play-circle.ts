import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elPlayCircleIcon],svg[el-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.65 0 0 268.65 0 600s268.65 600 600 600s600-268.65 600-600S931.35 0 600 0m0 139.16c254.499 0 460.84 206.341 460.84 460.84S854.499 1060.84 600 1060.84S139.16 854.499 139.16 600S345.501 139.16 600 139.16M450 300.439V899.56L900 600z"></svg:path>`,
})
export class ElPlayCircleIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
