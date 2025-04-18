import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsMinusIcon],svg[ls-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 268h758v158H0z"></svg:path>`,
})
export class LsMinusIcon {
  readonly viewBox = input("0 0 758 614")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
