import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMoacIcon],svg[cryptocurrency-color-moac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#000"></svg:circle><svg:path fill="#FFF" d="M15.792 15.792L9.423 9.423l-.138-.208L7.02 7v17.515h2.284V12.4l4.916 4.985l1.592 1.592l1.592-1.592L22.32 12.4v12.115h2.284V7L22.32 9.215z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorMoacIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
