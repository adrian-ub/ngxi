import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elHomeAltIcon],svg[el-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m0 276.489l292.969 227.71v419.312H691.406V670.386H508.594v253.125H307.031V504.199z"></svg:path>`,
})
export class ElHomeAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
