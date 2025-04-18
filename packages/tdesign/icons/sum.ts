import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSumIcon],svg[tdesign-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.586 3H21v2H6.414l7 7l-7 7H21v2H1.586l9-9z"></svg:path>`,
})
export class TdesignSumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
