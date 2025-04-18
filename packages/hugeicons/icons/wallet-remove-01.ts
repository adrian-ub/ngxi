import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletRemove01Icon],svg[hugeicons-wallet-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.002 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M10 15l-7 7m7 0l-7-7"></svg:path><svg:path d="M10.002 7h6c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-2.501m4.501-14c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C15.397 3 14.932 3 14.002 3h-4C6.231 3 4.345 3 3.174 4.172S2.002 7.229 2.002 11v1"></svg:path></svg:g>`,
})
export class HugeiconsWalletRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
