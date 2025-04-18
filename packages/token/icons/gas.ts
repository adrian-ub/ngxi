import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGasIcon],svg[token-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.676 17.922l-6.353-2.934V8.49l6.353-2.232zm-9 3.078l-6.353-2.862V6.564l6.353 2.862zm0-12.024L4.567 6.159L13.5 3l6.077 2.826z"></svg:path>`,
})
export class TokenGasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
