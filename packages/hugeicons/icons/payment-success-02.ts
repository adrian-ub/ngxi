import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPaymentSuccess02Icon],svg[hugeicons-payment-success-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11.5V6.114c0-.791 0-1.186-.194-1.594a2.4 2.4 0 0 0-.565-.71c-.354-.28-.65-.347-1.241-.483c-.92-.21-1.934-.327-3-.327c-1.917 0-3.668.378-5 1S8.917 5 7 5c-1.066 0-2.08-.117-3-.327c-.96-.22-2 .456-2 1.441v10.772c0 .791 0 1.187.194 1.594c.11.233.363.55.565.71c.354.28.65.347 1.241.483c.92.21 1.934.327 3 .327c1.469 0 2.84-.222 4-.605M14 19s1 0 2 2c0 0 3.177-5 6-6"></svg:path><svg:path d="M14.5 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 1v.009m13-2.017v.01"></svg:path></svg:g>`,
})
export class HugeiconsPaymentSuccess02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
