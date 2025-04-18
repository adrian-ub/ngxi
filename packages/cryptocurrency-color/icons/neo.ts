import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNeoIcon],svg[cryptocurrency-color-neo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#58BF00"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="m25 22.58l-6.99-3.258v-7.22L25 9.623zM14.823 26L8 22.821V9.958l6.823 3.18zm10.01-16.843l-.113.04l-6.71 2.381l-.168.06l-2.843 1.008l-6.73-3.136l9.573-3.396l.084-.03l.177-.063l.062-.021l6.73 3.136z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorNeoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
