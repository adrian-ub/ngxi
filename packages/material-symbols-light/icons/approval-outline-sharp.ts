import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightApprovalOutlineSharpIcon],svg[material-symbols-light-approval-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19.462v-6.077h14v6.077zm1-3h12v-2.077H6zm6-3.077L8 7.962v-.193q0-1.671 1.165-2.835Q10.329 3.769 12 3.769t2.836 1.165T16 7.769v.192zm0-1.55l3-4.066q0-1.25-.875-2.125T12 4.77t-2.125.875T9 7.77zm0-3.543"></svg:path>`,
})
export class MaterialSymbolsLightApprovalOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
