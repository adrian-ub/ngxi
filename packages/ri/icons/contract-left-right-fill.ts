import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractLeftRightFillIcon],svg[ri-contract-left-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 18l6-6l-6-6zM19 6l-6 6l6 6z"></svg:path>`,
})
export class RiContractLeftRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
