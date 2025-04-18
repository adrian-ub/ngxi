import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSpinnerIcon],svg[eos-icons-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v5h-2zm0 15h2v5h-2zm11-6v2h-5v-2zM7 11v2H2v-2zm11.364-6.778l1.414 1.414l-3.536 3.536l-1.414-1.414zM7.758 14.828l1.414 1.414l-3.536 3.536l-1.414-1.414zm12.02 3.536l-1.414 1.414l-3.536-3.536l1.414-1.414zM9.172 7.758L7.758 9.172L4.222 5.636l1.414-1.414z"></svg:path>`,
})
export class EosIconsSpinnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
