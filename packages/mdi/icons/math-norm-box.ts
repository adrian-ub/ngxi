import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMathNormBoxIcon],svg[mdi-math-norm-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-9 15H8V6h2zm6 0h-2V6h2z"></svg:path>`,
})
export class MdiMathNormBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
