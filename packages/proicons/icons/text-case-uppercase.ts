import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextCaseUppercaseIcon],svg[proicons-text-case-uppercase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m1.01 18l1.92-4.404m0 0h6.91m-6.91 0L5.87 6.85a.553.553 0 0 1 1.028 0l2.941 6.747m0 0L11.76 18m3-5.948h4.046a2.765 2.765 0 0 0 2.754-2.776A2.765 2.765 0 0 0 18.806 6.5H14.76zm0 0h5c1.657 0 3 1.331 3 2.974c0 1.642-1.343 2.974-3 2.974h-5z"></svg:path>`,
})
export class ProiconsTextCaseUppercaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
