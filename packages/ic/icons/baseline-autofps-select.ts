import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineAutofpsSelectIcon],svg[ic-baseline-autofps-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z"></svg:path><svg:path fill="currentColor" d="M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74zM7 17h2v5H7zm4 0h2v5h-2zm4 0h6v5h-6z"></svg:path>`,
})
export class IcBaselineAutofpsSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
