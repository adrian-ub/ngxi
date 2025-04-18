import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCommaIcon],svg[ls-comma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m84 538l70 33l-94 196l-60-29z"></svg:path>`,
})
export class LsCommaIcon {
  readonly viewBox = input("0 0 154 767")
  readonly width = input("0.21em")
  readonly height = input("1em")
}
