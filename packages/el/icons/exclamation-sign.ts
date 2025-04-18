import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elExclamationSignIcon],svg[el-exclamation-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M381.958 118.213h436.084l-93.75 660.571H475.708zm220.386 705.542c71.262 0 129.053 57.79 129.053 129.053s-57.791 128.979-129.053 128.979s-129.053-57.717-129.053-128.979s57.791-129.053 129.053-129.053"></svg:path>`,
})
export class ElExclamationSignIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
