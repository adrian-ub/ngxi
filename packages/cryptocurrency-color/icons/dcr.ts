import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDcrIcon],svg[cryptocurrency-color-dcr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#2ED6A1"></svg:circle><svg:path fill="#FFF" fill-rule="nonzero" d="M14.856 17.62h4.42a2.987 2.987 0 0 0 2.978-2.996a2.987 2.987 0 0 0-2.978-2.995H17.87L14.856 9h4.42a5.6 5.6 0 0 1 5.488 4.545a5.63 5.63 0 0 1-3.379 6.29l3.485 3.042h-3.991zm2.157-3.36h-4.42a2.987 2.987 0 0 0-2.978 2.994a2.987 2.987 0 0 0 2.978 2.995H14l3.012 2.63h-4.419a5.6 5.6 0 0 1-5.488-4.545a5.63 5.63 0 0 1 3.379-6.29L7.002 9h3.991z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorDcrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
