import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsDataMiningIcon],svg[eos-icons-data-mining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.403 8.69a7.1 7.1 0 0 0-3.348-4.217l-.869-.496l.496-.868l-1.736-.993l-.496.869L4.977 1l-.992 1.736l3.473 1.985l-.497.868l-.992 1.737L2 14.272l1.736.992l3.97-6.946l.992-1.736l.496-.869l.868.496Z"></svg:path><svg:path fill="currentColor" d="M10 10v3h12v-3Zm11 2h-4v-1h4Zm-11 3v3h12v-3Zm11 2h-4v-1h4Zm-11 3v3h12v-3Zm11 2h-4v-1h4Z"></svg:path>`,
})
export class EosIconsDataMiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
