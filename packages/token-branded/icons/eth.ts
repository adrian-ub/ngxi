import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEthIcon],svg[token-branded-eth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8FFCF3" d="M12 3v6.65l5.625 2.516z"></svg:path><svg:path fill="#CABCF8" d="m12 3l-5.625 9.166L12 9.651z"></svg:path><svg:path fill="#CBA7F5" d="M12 16.477v4.522l5.625-7.784z"></svg:path><svg:path fill="#74A0F3" d="M12 21v-4.523l-5.625-3.262z"></svg:path><svg:path fill="#CBA7F5" d="m12 15.43l5.625-3.263L12 9.65z"></svg:path><svg:path fill="#74A0F3" d="M6.375 12.167L12 15.429V9.651z"></svg:path><svg:path fill="#202699" fill-rule="evenodd" d="m12 15.429l-5.625-3.263L12 3l5.625 9.166zM6.749 11.9l5.16-8.41v6.115zm-.077.23l5.238-2.327v5.364zm5.418-2.327v5.364l5.233-3.038zm0-.198l5.16 2.295l-5.16-8.41z" clip-rule="evenodd"></svg:path><svg:path fill="#202699" fill-rule="evenodd" d="M12 16.406L6.375 13.21L12 21l5.625-7.79zm-4.995-2.633l4.905 2.79v4.005zm5.085 2.79v4.005l4.905-6.795z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedEthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
