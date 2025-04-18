import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet01Icon],svg[hugeicons-wallet-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M10 7h6c2.828 0 4.243 0 5.121.879C22 8.757 22 10.172 22 13v2c0 2.828 0 4.243-.879 5.121C20.243 21 18.828 21 16 21h-6c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C18 5.605 18 6.07 18 7"></svg:path></svg:g>`,
})
export class HugeiconsWallet01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
