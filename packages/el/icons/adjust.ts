import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAdjustIcon],svg[el-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.641 0 0 268.641 0 600s268.641 600 600 600s600-268.641 600-600S931.359 0 600 0m0 174.975V1025.1c-234.75 0-425.109-190.336-425.109-425.109c0-234.751 190.336-425.016 425.109-425.016"></svg:path>`,
})
export class ElAdjustIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
