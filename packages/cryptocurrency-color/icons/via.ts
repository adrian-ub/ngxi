import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorViaIcon],svg[cryptocurrency-color-via-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#565656"></svg:circle><svg:path fill="#fff" fill-rule="nonzero" d="M11.133 14.296H8.005v-1.719h2.47L8.58 7.627L10.144 7l3.55 9.267l4.601.03L21.856 7l1.565.627l-1.896 4.95h2.47v1.72h-3.128l-.771 2.01l3.904.025l-.01 1.719l-4.55-.029L16 27l-3.456-9.021L8 17.949l.01-1.718l3.874.025zm3.22 3.694L16 22.288l1.638-4.277z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorViaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
