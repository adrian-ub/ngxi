import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsReverseWithdrawal02Icon],svg[hugeicons-reverse-withdrawal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 10.999c-1.105 0-2 .67-2 1.499c0 .827.895 1.498 2 1.498s2 .671 2 1.499c0 .827-.895 1.498-2 1.498M12 11c.87 0 1.612.417 1.886.999m-1.886-1V10m0 6.993c-.87 0-1.612-.417-1.886-.999m1.886 1L12.003 18"></svg:path><svg:path d="M21 11a1.5 1.5 0 0 0 .414-.305C22 10.089 22 9.11 22 7.152s0-2.936-.586-3.544S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.608S2 5.195 2 7.152s0 2.936.586 3.543q.18.188.414.305m2-4h14"></svg:path></svg:g>`,
})
export class HugeiconsReverseWithdrawal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
