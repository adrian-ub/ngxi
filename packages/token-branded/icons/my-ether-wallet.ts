import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMyEtherWalletIcon],svg[token-branded-my-ether-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M12 18.463a6.463 6.463 0 1 0 0-12.925a6.463 6.463 0 0 0 0 12.925"></svg:path><svg:path fill="#1896A4" d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 1 0-18 0m9 5.656c-3.042 0-5.65-2.467-5.65-5.51c0-.714.135-1.538.382-2.165l2.429 1.035l-.03.128a3 3 0 0 0-.125.73A1 1 0 0 0 9 12.02l.003.033a2.982 2.982 0 0 0 3.661 2.867l1.38 2.344a5.5 5.5 0 0 1-2.042.39m5.213-3.417l-6.162-2.61l3.951-.018c-.14-1.434-1.614-2.598-3.004-2.598c-.315 0-.628.052-.926.155L9.706 6.843A5.5 5.5 0 0 1 12 6.345c3.042 0 5.642 2.512 5.642 5.554c0 .82-.106 1.64-.428 2.34"></svg:path></svg:g>`,
})
export class TokenBrandedMyEtherWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
