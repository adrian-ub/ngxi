import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet02Icon],svg[hugeicons-wallet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2.9-6q.1-.486.1-1a5 5 0 1 0-9.9 1"></svg:path><svg:path d="M7 7.993h9c2.828 0 4.243 0 5.121.88c.879.878.879 2.293.879 5.123v2.001c0 2.83 0 4.245-.879 5.124C20.243 22 18.828 22 16 22h-6c-3.771 0-5.657 0-6.828-1.172S2 17.769 2 13.996v-2c0-3.774 0-5.66 1.172-6.833C4.115 4.22 5.52 4.036 8 4h2"></svg:path></svg:g>`,
})
export class HugeiconsWallet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
