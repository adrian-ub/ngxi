import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletNotFound02Icon],svg[hugeicons-wallet-not-found-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.79 6.833C5.18 6.553 3.881 6.26 3 6v9.061c0 1.995 0 2.992.62 3.805s1.47 1.043 3.17 1.503c2.746.742 5.634 1.184 8.22 1.437c2.682.262 4.022.393 5.006-.506q.297-.271.484-.619M11 7.5c1.254.145 2.597.205 4.004.303c2.921.202 4.382.304 5.189 1.174S21 11.25 21 14.055v2.013q0 .495-.002.932M3 6c0-.838.385-1.603 1-2"></svg:path><svg:path d="M17.626 8c.377-1.423.719-4.012-.298-5.297c-.643-.813-1.6-.737-2.54-.654c-3.222.284-5.826.759-7.788 1.221M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsWalletNotFound02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
