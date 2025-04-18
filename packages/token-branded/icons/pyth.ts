import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPythIcon],svg[token-branded-pyth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#110F24"><svg:path d="M13.543 10.2c0 .993-.853 1.543-1.543 1.543V13.8a3.6 3.6 0 1 0-3.6-3.6v8.846L10.457 21V10.2c0-.668.55-1.542 1.543-1.542a1.543 1.543 0 0 1 1.543 1.543"></svg:path><svg:path d="M12 3a7.16 7.16 0 0 0-5.4 2.438A7.17 7.17 0 0 0 4.8 10.2v5.4l2.057 1.98V10.2c0-2.685 2.16-5.143 5.143-5.143s5.143 2.484 5.143 5.143c0 2.983-2.458 5.143-5.143 5.143V17.4A7.2 7.2 0 1 0 12 3"></svg:path></svg:g>`,
})
export class TokenBrandedPythIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
