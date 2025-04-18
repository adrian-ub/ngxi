import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyZelIcon],svg[cryptocurrency-zel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M5 15.615v4.847L9.495 23l4.494-2.538v-4.847l-4.494-2.538zm13.01 0v4.847L22.506 23L27 20.462v-4.847l-4.495-2.538zm-.472 4.21v-4.594l4.021-2.271v-1.73L15.961 8l-5.599 3.23v1.685l4.1 2.316v4.638l1.499.823l1.577-.866z"></svg:path>`,
})
export class CryptocurrencyZelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
