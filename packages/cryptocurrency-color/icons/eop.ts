import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEopIcon],svg[cryptocurrency-color-eop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#35A7DF"></svg:circle><svg:path fill="#FEFFFE" d="M14.714 28L9.366 13.737l-2.16 9.84zM16.12 4.171l-5.863 7.132l5.863 14.983l5.897-14.983zM17.56 28l5.349-14.263l2.125 9.84z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorEopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
