import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elReverseAltIcon],svg[el-reverse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 1200C268.65 1200 0 931.35 0 600S268.65 0 600 0s600 268.65 600 600s-268.65 600-600 600m-75-824.625L225 600l300 224.625zm375 0L600 600l300 224.625z"></svg:path>`,
})
export class ElReverseAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
