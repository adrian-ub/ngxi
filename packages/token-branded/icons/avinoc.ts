import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAvinocIcon],svg[token-branded-avinoc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fff"><svg:path d="M7.373 4.059h7.2L11.74 5.647H8.4L4.8 12l3.6 6.353h7.2L18.94 12L17.4 9.353l.26-3.177L21 12l-4.373 7.941H7.373L3 12z"></svg:path><svg:path d="m7.373 10.412l9.513-6.353L15.6 15.176l-2.573-4.764z"></svg:path></svg:g>`,
})
export class TokenBrandedAvinocIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
