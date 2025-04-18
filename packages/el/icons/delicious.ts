import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elDeliciousIcon],svg[el-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v600h600V0zm600 600v600h600V600z"></svg:path>`,
})
export class ElDeliciousIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
