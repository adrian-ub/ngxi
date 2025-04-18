import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyReceive01Icon],svg[hugeicons-money-receive-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 6c1.3.129 2.175.42 2.828 1.077C22 8.256 22 10.154 22 13.949s0 5.693-1.172 6.872S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.18C2 19.643 2 17.745 2 13.95s0-5.693 1.172-6.872C3.825 6.42 4.7 6.129 6 6"></svg:path><svg:path d="M9.5 5.5C9.992 6.006 11.3 8 12 8m2.5-2.5C14.008 6.006 12.7 8 12 8m0 0V2m6.508 12h-.01m-12.99 0h-.01m9.002 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsMoneyReceive01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
