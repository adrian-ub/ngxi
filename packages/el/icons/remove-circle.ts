import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elRemoveCircleIcon],svg[el-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.63 0 0 268.63 0 600s268.63 600 600 600s600-268.63 600-600S931.369 0 600 0m0 130.371c259.369 0 469.556 210.325 469.556 469.629S859.369 1069.556 600 1069.556c-259.37 0-469.556-210.251-469.556-469.556C130.445 340.696 340.63 130.371 600 130.371M435.425 305.347L305.347 435.425L469.922 600L305.347 764.575l130.078 130.078L600 730.078l164.575 164.575l130.078-130.078L730.078 600l164.575-164.575l-130.078-130.078L600 469.922z"></svg:path>`,
})
export class ElRemoveCircleIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
