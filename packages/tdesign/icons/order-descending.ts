import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignOrderDescendingIcon],svg[tdesign-order-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h13v2H2zm0 7h13v2H2zm1 7H2v2h11v-2zm16 3.414l.707-.707l3-3l.707-.707L22 15.586l-.707.707L20 17.586V4h-2v13.586l-1.293-1.293l-.707-.707L14.586 17l.707.707l3 3z"></svg:path>`,
})
export class TdesignOrderDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
