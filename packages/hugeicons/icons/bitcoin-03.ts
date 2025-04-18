import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBitcoin03Icon],svg[hugeicons-bitcoin-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.745 13a7 7 0 1 0-12.072-1"></svg:path><svg:path d="M12.438 11.667V6.333m1.562 0V5m0 8v-1.333M12.438 9h3.124m0 0c.518 0 .938.448.938 1v.667c0 .552-.42 1-.937 1H11.5M15.563 9c.517 0 .937-.448.937-1v-.667c0-.552-.42-1-.937-1H11.5M3 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L5.842 16.75M12 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L3 20.02"></svg:path></svg:g>`,
})
export class HugeiconsBitcoin03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
