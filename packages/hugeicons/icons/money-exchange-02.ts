import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyExchange02Icon],svg[hugeicons-money-exchange-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11.5V5.114c0-.791 0-1.186-.194-1.594a2.4 2.4 0 0 0-.565-.71c-.354-.28-.65-.347-1.241-.483c-.92-.21-1.934-.327-3-.327c-1.917 0-3.668.378-5 1S8.917 4 7 4c-1.066 0-2.08-.117-3-.327c-.96-.22-2 .456-2 1.441v10.772c0 .791 0 1.187.194 1.594c.11.233.363.55.565.71c.354.28.65.347 1.241.483c.92.21 1.934.327 3 .327c1.469 0 2.84-.222 4-.605"></svg:path><svg:path d="M14.5 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 1v.009m13-2.017v.01M19.333 14l.824.758c.179.176.268.264.237.339s-.159.075-.412.075h-3.104C15.288 15.172 14 16.438 14 18c0 .352.066.69.185 1m2.482 3l-.824-.758c-.179-.176-.268-.264-.237-.339s.159-.075.412-.075h3.104C20.712 20.828 22 19.562 22 18c0-.352-.066-.69-.185-1"></svg:path></svg:g>`,
})
export class HugeiconsMoneyExchange02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
