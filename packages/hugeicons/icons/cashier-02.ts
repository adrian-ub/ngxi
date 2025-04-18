import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCashier02Icon],svg[hugeicons-cashier-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 17.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h11c1.886 0 2.828 0 3.414-.586s.586-1.528.586-3.414m-11.5 2h4m2.5-14v3m-1.5-3h3c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.699 2.5 18.466 2.5 18 2.5h-3c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077m6.5 12h-19l1.304-5.868c.334-1.501.5-2.252 1.049-2.692S6.17 8.5 7.709 8.5h8.582c1.539 0 2.308 0 2.856.44c.549.44.715 1.19 1.05 2.692zm-14-6H8m3.75 0h.5m3.75 0h.5m-9 3H8m3.75 0h.5m3.75 0h.5" color="currentColor"></svg:path>`,
})
export class HugeiconsCashier02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
