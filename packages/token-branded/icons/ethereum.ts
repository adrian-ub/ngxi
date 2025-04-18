import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEthereumIcon],svg[token-branded-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8FFCF3" d="M12 3v6.651l5.625 2.516z"></svg:path><svg:path fill="#CABCF8" d="m12 3l-5.625 9.166L12 9.653z"></svg:path><svg:path fill="#CBA7F5" d="M12 16.478V21l5.625-7.784z"></svg:path><svg:path fill="#74A0F3" d="M12 21v-4.522l-5.625-3.262z"></svg:path><svg:path fill="#CBA7F5" d="m12 15.43l5.625-3.263L12 9.652z"></svg:path><svg:path fill="#74A0F3" d="M6.375 12.167L12 15.43V9.652z"></svg:path><svg:path fill="#202699" fill-rule="evenodd" d="m12 15.43l-5.625-3.263L12 3l5.624 9.166zm-5.252-3.528l5.161-8.41v6.114zm-.077.229l5.238-2.327v5.364zm5.418-2.327v5.364l5.234-3.037zm0-.198l5.161 2.296l-5.161-8.41z" clip-rule="evenodd"></svg:path><svg:path fill="#202699" fill-rule="evenodd" d="m12 16.406l-5.625-3.195L12 21l5.624-7.79zm-4.995-2.633l4.904 2.79v4.005zm5.084 2.79v4.005l4.905-6.795z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedEthereumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
