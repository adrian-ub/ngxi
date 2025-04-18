import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorNeosIcon],svg[cryptocurrency-color-neos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#e5f300"></svg:circle><svg:path fill="#fff" d="m10.5 9.358l8.143 4.926v3.097l-5.714-3.433V26H10.5zm11 13.284l-8.143-4.926V14.62l5.714 3.433V6H21.5z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorNeosIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
