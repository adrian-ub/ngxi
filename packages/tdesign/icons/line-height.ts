import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLineHeightIcon],svg[tdesign-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.707 3.293L5 2.586l-.707.707L2 5.586l-.707.707l1.414 1.414L3.414 7L4 6.414v11.171L3.414 17l-.707-.707l-1.414 1.414l.707.707l2.293 2.293l.707.707l.707-.707L8 18.414l.707-.707l-1.414-1.414l-.707.707l-.586.585V6.414L6.586 7l.707.707l1.414-1.414L8 5.586zM13 4h-1v2h10V4zm-2 7h-1v2h12v-2zm1 7h10v2H12z"></svg:path>`,
})
export class TdesignLineHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
