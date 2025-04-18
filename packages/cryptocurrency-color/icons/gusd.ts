import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorGusdIcon],svg[cryptocurrency-color-gusd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#00DCFA"></svg:circle><svg:path fill="#FFF" d="M19.378 5c-3.87 0-7.157 2.976-7.57 6.807C7.975 12.221 5 15.508 5 19.377A7.627 7.627 0 0 0 12.622 27c3.87 0 7.17-2.976 7.57-6.807c3.832-.414 6.808-3.701 6.808-7.57A7.627 7.627 0 0 0 19.378 5m5.836 8.476a5.93 5.93 0 0 1-4.97 4.97v-4.97zM6.786 18.524a5.93 5.93 0 0 1 4.97-4.983v4.97h-4.97zm11.673 1.72a5.895 5.895 0 0 1-5.837 5.035a5.894 5.894 0 0 1-5.836-5.034h11.673zm.065-6.768v5.035h-5.048v-5.035zm6.69-1.72H13.541a5.895 5.895 0 0 1 5.837-5.035a5.894 5.894 0 0 1 5.836 5.034z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorGusdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
