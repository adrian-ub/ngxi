import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorWingsIcon],svg[cryptocurrency-color-wings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#0dc9f7"></svg:circle><svg:g fill="#fff" fill-rule="nonzero"><svg:path fill-opacity=".305" d="m18.904 15.739l-3.045 2.364l-1.247-4.325l-7.224-1.935l9.481.487z"></svg:path><svg:path fill-opacity=".7" d="M8.27 23.993L24.586 11.33L26 14.476l-1.855-.513l-.065 3.264z"></svg:path><svg:path d="m22.796 17.78l-4.747-8.161L6 9l9.183 2.461l2.49 8.49z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorWingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
