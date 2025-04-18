import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCompareStatesOutlinedIcon],svg[eos-icons-compare-states-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 15l-1.414 1.414L10.172 18H5V7.816a3 3 0 1 0-2 0V18a2 2 0 0 0 2 2h5.172l-1.586 1.586L10 23l4-4ZM4 6a1 1 0 1 1 1-1a1 1 0 0 1-1 1m17 10.184V6a2 2 0 0 0-2-2h-5.172l1.586-1.586L14 1l-4 4l4 4l1.414-1.414L13.828 6H19v10.184a3 3 0 1 0 2 0M20 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class EosIconsCompareStatesOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
