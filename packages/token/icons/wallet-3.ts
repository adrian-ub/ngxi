import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWallet3Icon],svg[token-wallet-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.222 3H21v18H3v-5.818l11.815 3.36a.57.57 0 0 0 .726-.547l.03-6.995a.57.57 0 0 1 .769-.532l2.578.959a.57.57 0 0 0 .76-.64z"></svg:path><svg:path fill="currentColor" d="M17.534 3H3v5.113l8.59 4.248a.572.572 0 0 0 .807-.379l.857-3.593a.57.57 0 0 1 .722-.412l3.411 1.042a.57.57 0 0 0 .734-.607z"></svg:path>`,
})
export class TokenWallet3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
