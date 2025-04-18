import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCompareStatesIcon],svg[eos-icons-compare-states-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.184V6a2 2 0 0 0-2-2h-5.172l1.586-1.586L14 1l-2.586 2.586L10 5l1.414 1.414L14 9l1.414-1.414L13.828 6H19v10.184a3 3 0 1 0 2 0m-8.414 1.402L10 15l-1.414 1.414L10.172 18H5V7.816a3 3 0 1 0-2 0V18a2 2 0 0 0 2 2h5.172l-1.586 1.586L10 23l2.586-2.586L14 19z"></svg:path>`,
})
export class EosIconsCompareStatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
