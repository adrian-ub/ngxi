import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheckboxMinusIcon],svg[bx-checkbox-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.01 11h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M17 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7 17V7h10v10z"></svg:path>`,
})
export class BxCheckboxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
