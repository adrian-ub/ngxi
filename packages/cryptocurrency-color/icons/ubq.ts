import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorUbqIcon],svg[cryptocurrency-color-ubq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#00EA90"></svg:circle><svg:path fill="#FFF" fill-opacity=".698" fill-rule="nonzero" d="m18.215 7.508l7.777 4.068l-7.493 4.593zm-4.43 16.941l-7.777-4.068l7.493-4.594z"></svg:path><svg:path fill="#FFF" fill-rule="nonzero" d="M25.992 20.679L15.179 27v-8.869l10.813-6.555zm-19.984-9.4L16.821 5v8.834L6.008 20.381z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorUbqIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
