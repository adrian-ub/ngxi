import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletAdd01Icon],svg[hugeicons-wallet-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.002 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M2.002 11c0-3.771 0-5.657 1.172-6.828S6.23 3 10.002 3h4c.93 0 1.395 0 1.776.102A3 3 0 0 1 17.9 5.224c.102.381.102.846.102 1.776m-8 0h6c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-3.501M10 17H6m0 0H2m4 0v4m0-4v-4"></svg:path></svg:g>`,
})
export class HugeiconsWalletAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
