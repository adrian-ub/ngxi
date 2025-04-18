import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elFileAltIcon],svg[el-file-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M496.729 288.794h39.697v151.538H379.468v-38.306zm92.944 0h230.859v622.412H379.468V491.748h210.205z"></svg:path>`,
})
export class ElFileAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
