import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCellphoneLineIcon],svg[ri-cellphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 7h10V4H7zm0 2v9h10v-9z"></svg:path>`,
})
export class RiCellphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
