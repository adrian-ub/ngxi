import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignJumpOffIcon],svg[tdesign-jump-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.414 21L3 1.586L1.586 3L3 4.414V21h16.586L21 22.414zm-4.828-2H5V6.414L10.586 12l-.502.502l1.417 1.417l.502-.502zm3.42-1.581L21 14.499v-1.01h-2v1.924zM21 2.999h-8v2h4.586l-4.5 4.5l1.414 1.415l4.5-4.5V11h2zm-10.49.003H9.5l-2.92-.006l2.007 2.006h1.923z"></svg:path>`,
})
export class TdesignJumpOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
