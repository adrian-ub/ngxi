import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyNotFound02Icon],svg[hugeicons-money-not-found-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.463 4.5c-.318.128-.6.289-.856.49q-.301.24-.554.523C2 6.693 2 8.463 2 12s0 5.306 1.053 6.487q.253.284.554.522C4.862 20 6.741 20 10.5 20h3c2.992 0 4.757 0 6-.5M8 4.016C8.728 4 9.554 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 6.693 22 8.463 22 12c0 2.313 0 3.87-.294 5M2 2l20 20"></svg:path><svg:path d="M13.742 13.742a2.5 2.5 0 1 1-3.535-3.535M5 12h1m12 0h1"></svg:path></svg:g>`,
})
export class HugeiconsMoneyNotFound02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
