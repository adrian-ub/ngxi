import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elMinusIcon],svg[el-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 430.078h1200v339.844H0z"></svg:path>`,
})
export class ElMinusIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
