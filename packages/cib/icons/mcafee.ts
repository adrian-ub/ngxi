import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMcafeeIcon],svg[cib-mcafee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6.459L2.145.042v25.5L16 31.959l13.855-6.417V.042zm8.208 15.458l-8.172 3.78l-8.167-3.78V8.937l8.167 3.781l8.172-3.781z"></svg:path>`,
})
export class CibMcafeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
