import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elErrorIcon],svg[el-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m0 164.062c240.762 0 435.938 195.176 435.938 435.938S840.762 1035.938 600 1035.938S164.062 840.762 164.062 600S359.238 164.062 600 164.062M281.47 482.153v235.693h637.06V482.153z"></svg:path>`,
})
export class ElErrorIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
