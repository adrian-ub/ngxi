import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibExpertsExchangeIcon],svg[cib-experts-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.708 1.198H0L11.146 16L0 30.802h9.708L20.854 16zm22.292 0h-9.708l-3.063 4.083l4.849 6.427zM19.229 26.734l3.063 4.068H32l-7.922-10.51z"></svg:path>`,
})
export class CibExpertsExchangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
