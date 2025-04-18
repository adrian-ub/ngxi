import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorPpcIcon],svg[cryptocurrency-color-ppc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#3CB054"></svg:circle><svg:path fill="#FFF" d="M9 7.5c12.093.447 16.756 7.706 14.415 14.183c-.663 1.803-1.368 2.79-2.85 3.817c.06-.26.122-.52.17-.787c.876-5.053-.785-11.134-8.912-14.493c6.466 3.848 9.075 10.695 6.06 15.115C12.75 26.142 9 21.759 9 16.709z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorPpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
