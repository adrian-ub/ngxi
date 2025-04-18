import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSubscriptionCashflowIcon],svg[streamline-subscription-cashflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.351 5.307a1.17 1.17 0 0 0-1.1-.778h-.903a1.041 1.041 0 0 0-.223 2.059l1.375.3a1.167 1.167 0 0 1-.25 2.307h-.777c-.508 0-.94-.324-1.1-.777m1.489-3.889V3.362m0 7V9.196m-4.864 4.302v-2.5h2.5"></svg:path><svg:path d="M13.388 5.804a6.5 6.5 0 0 1-11.39 5.35M.612 8.196a6.5 6.5 0 0 1 11.39-5.35"></svg:path><svg:path d="M12.002.502v2.5h-2.5"></svg:path></svg:g>`,
})
export class StreamlineSubscriptionCashflowIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
