import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMathNormIcon],svg[mdi-math-norm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21V3h2v18zm-6 0V3h2v18z"></svg:path>`,
})
export class MdiMathNormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
