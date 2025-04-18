import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractUpDownLineIcon],svg[ri-contract-up-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.793 5.207L12 11.414l6.207-6.207l-1.414-1.414L12 8.586L7.207 3.793zm12.414 13.586L12 12.586l-6.207 6.207l1.414 1.414L12 15.414l4.793 4.793z"></svg:path>`,
})
export class RiContractUpDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
