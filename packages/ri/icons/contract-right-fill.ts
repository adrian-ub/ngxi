import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractRightFillIcon],svg[ri-contract-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 5l7 7l-7 7v-6H3v-2h6zm9 14V5h2v14z"></svg:path>`,
})
export class RiContractRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
