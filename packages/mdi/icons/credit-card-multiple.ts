import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardMultipleIcon],svg[mdi-credit-card-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9V6H7v3zm0-6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 19h15v2H3a2 2 0 0 1-2-2V8h2Z"></svg:path>`,
})
export class MdiCreditCardMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
