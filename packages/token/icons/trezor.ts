import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTrezorIcon],svg[token-trezor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.462 7.177C16.462 4.894 14.45 3 12 3S7.536 4.895 7.536 7.177v1.336H5.7v9.603L12 21l6.3-2.885V8.554h-1.836zm-6.65 0c0-1.076.962-1.938 2.187-1.938s2.188.862 2.188 1.938v1.336H9.812zm5.95 9.389l-3.763 1.723l-3.762-1.723v-5.771h7.525z"></svg:path>`,
})
export class TokenTrezorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
