import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChangeHistoryOutlineRoundedIcon],svg[material-symbols-change-history-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.8 20q-.575 0-.875-.513t.025-1.012l8.2-13.125q.3-.475.85-.475t.85.475l8.2 13.125q.325.5.025 1.013T20.2 20zm1.8-2h12.8L12 7.75zm6.4-5.125"></svg:path>`,
})
export class MaterialSymbolsChangeHistoryOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
