import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCircleArrowLeftIcon],svg[el-circle-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 1200c331.359 0 600-268.641 600-600S931.359 0 600 0S0 268.641 0 600s268.641 600 600 600m66.656-297.141L212.32 600l454.336-302.859v163.184H987.68v279.352H666.656z"></svg:path>`,
})
export class ElCircleArrowLeftIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
