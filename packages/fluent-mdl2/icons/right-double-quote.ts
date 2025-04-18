import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RightDoubleQuoteIcon],svg[fluent-mdl2-right-double-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 66h332v343q0 51-7 105t-23 104t-41 96t-62 78t-84 53T5 865V708q37 0 64-14t47-38t30-55t18-64t9-66t3-62H0zm875 0v343q0 78-16 159t-54 147t-100 108t-157 42V708q55 0 89-30t53-76t25-98t7-95H546V66z"></svg:path>`,
})
export class FluentMdl2RightDoubleQuoteIcon {
  readonly viewBox = input("0 0 875 2048")
  readonly width = input("0.43em")
  readonly height = input("1em")
}
