import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elEnvelopeAltIcon],svg[el-envelope-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M292.969 367.896h614.062v86.353L600 629.297L292.969 454.248zm0 141.577l156.372 89.136l-156.372 163.915zm614.062 0v253.052L750.659 598.608zM492.334 623.145L600 684.521l107.666-61.377l199.365 208.96H292.969z"></svg:path>`,
})
export class ElEnvelopeAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
