import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorZelIcon],svg[cryptocurrency-color-zel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#183C87" fill-rule="nonzero"></svg:circle><svg:path fill="#FFF" d="m5 15.615l4.495-2.538l4.494 2.538v4.847L9.495 23L5 20.462zm13.01 0l4.495-2.538L27 15.615v4.847L22.505 23l-4.494-2.538zm-.472 4.21l-1.577.867l-1.499-.823V15.23l-4.1-2.316V11.23L15.961 8l5.598 3.23v1.73l-4.021 2.27v4.596z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorZelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
