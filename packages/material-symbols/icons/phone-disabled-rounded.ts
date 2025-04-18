import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPhoneDisabledRoundedIcon],svg[material-symbols-phone-disabled-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.1 22l-4.85-4.85q-2.225 1.8-4.837 2.825T4.05 21q-.6 0-.825-.3T3 19.95V15.9q0-.35.225-.612t.575-.338l3.45-.7q.275-.05.688.075t.612.325L10.9 17q.45-.275.975-.625t.925-.675L2.1 5q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275m-2.025-7.675L15.65 12.9q.35-.425.738-.975t.637-1.025L14.6 8.45q-.2-.2-.275-.562T14.3 7.3l.65-3.5q.075-.35.338-.575T15.9 3h4.05q.45 0 .75.3t.3.75q0 2.75-1.037 5.375t-2.888 4.9"></svg:path>`,
})
export class MaterialSymbolsPhoneDisabledRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
