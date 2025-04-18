import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibSlashdotIcon],svg[cib-slashdot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.37 0L9.38 32H2.489L19.473 0zm3.14 26.401a5.48 5.48 0 0 1-5.479 5.474c-3.026 0-5.479-2.453-5.479-5.474s2.453-5.474 5.479-5.474a5.48 5.48 0 0 1 5.479 5.474"></svg:path>`,
})
export class CibSlashdotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
