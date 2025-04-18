import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorIcxIcon],svg[cryptocurrency-color-icx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#1fc5c9"></svg:circle><svg:path fill="#fff" d="m11.296 22.472l2.164-2.164a5 5 0 0 0 6.848-6.848l2.164-2.164a8 8 0 0 1-11.176 11.176m-1.768-1.768A8 8 0 0 1 20.704 9.528l-2.164 2.164a5 5 0 0 0-6.848 6.848zM24 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4M8 26a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path></svg:g>`,
})
export class CryptocurrencyColorIcxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
