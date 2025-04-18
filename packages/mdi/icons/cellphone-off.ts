import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCellphoneOffIcon],svg[mdi-cellphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.38 1.73L1.11 3L5 6.89V21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.11l1.84 1.84l1.27-1.27M17 19H7V8.89l10 10zm0-14v8.8l2 2V3a2 2 0 0 0-2-2H7c-.72 0-1.4.37-1.76 1l3 3z"></svg:path>`,
})
export class MdiCellphoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
