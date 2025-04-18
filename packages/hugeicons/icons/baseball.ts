import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBaseballIcon],svg[hugeicons-baseball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M12 22q0-.28-.015-.555M2 12q.309 0 .614.018m2.726.553q.502.179.978.407m2.368 1.585q.39.351.741.741m1.615 2.419q.208.441.375.905M12 2q0 .28.015.555M22 12q-.308 0-.614-.018m-2.726-.553a10 10 0 0 1-.978-.407m-2.368-1.585q-.39-.351-.741-.741m-1.615-2.419a10 10 0 0 1-.375-.905"></svg:path></svg:g>`,
})
export class HugeiconsBaseballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
