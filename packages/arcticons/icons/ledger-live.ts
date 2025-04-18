import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLedgerLiveIcon],svg[arcticons-ledger-live-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.797 39.203A21.504 21.504 0 0 1 32.734 4.348m6.469 4.449a21.504 21.504 0 0 1-23.937 34.855m-6.469-4.449l5.657-5.657m19.092-19.092l5.657-5.657"></svg:path>`,
})
export class ArcticonsLedgerLiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
