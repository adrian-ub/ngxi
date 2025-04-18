import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsApprovalOutlineIcon],svg[material-symbols-approval-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22v-6q0-.825.588-1.412T6 14h12q.825 0 1.413.588T20 16v6zm2-4h12v-2H6zm6-4L7 7q0-2.075 1.463-3.537T12 2t3.538 1.463T17 7zm0-2.8L15 7q0-1.25-.875-2.125T12 4t-2.125.875T9 7zm0-3.6"></svg:path>`,
})
export class MaterialSymbolsApprovalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
