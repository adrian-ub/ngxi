import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyExchange01Icon],svg[hugeicons-money-exchange-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19.333 14l.824.758c.179.176.268.264.237.339s-.159.075-.412.075h-3.104C15.288 15.172 14 16.438 14 18c0 .352.066.69.185 1m2.482 3l-.824-.758c-.179-.176-.268-.264-.237-.339s.159-.075.412-.075h3.104C20.712 20.828 22 19.562 22 18c0-.352-.066-.69-.185-1"></svg:path><svg:path d="M21.991 11.5C22 10.9 22 10.736 22 10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10s0 5.657 1.172 6.828S6.229 18 10 18h1m7.5-8h-.009M5.5 10h-.009"></svg:path><svg:path d="M14.5 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsMoneyExchange01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
