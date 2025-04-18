import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elRecordIcon],svg[el-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 1200C268.65 1200 0 931.35 0 600S268.65 0 600 0s600 268.65 600 600s-268.65 600-600 600m0-900c-165.675 0-300 134.325-300 300s134.325 300 300 300s300-134.325 300-300s-134.325-300-300-300"></svg:path>`,
})
export class ElRecordIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
