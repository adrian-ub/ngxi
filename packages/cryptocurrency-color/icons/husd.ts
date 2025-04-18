import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorHusdIcon],svg[cryptocurrency-color-husd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#005FFA" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="M20.694 14.598a3.4 3.4 0 0 0-1.41-.305h-4.917a1.71 1.71 0 0 1-1.71-1.71v-5.89H9.239v7.6a3.42 3.42 0 0 0 3.42 3.42h4.916a1.71 1.71 0 0 1 1.71 1.71v5.89h3.419v-7.6a3.42 3.42 0 0 0-2.01-3.115M9.356 19.803v5.744h3.42v-2.325a3.42 3.42 0 0 0-3.42-3.419M19.88 6.929h-.714v2.325a3.42 3.42 0 0 0 3.42 3.42V6.928H19.88z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorHusdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
