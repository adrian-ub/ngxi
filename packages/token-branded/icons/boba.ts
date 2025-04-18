import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBobaIcon],svg[token-branded-boba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#AEDB01" d="M12.05 14.999H3.841V3h8.207a5.1 5.1 0 0 1 5.097 5.102v1.795a5.1 5.1 0 0 1-5.097 5.102"></svg:path><svg:path fill="#B0B1AC" d="M14.159 21H3.842v-6.002A5.995 5.995 0 0 1 9.839 9h4.32a6 6 0 1 1 0 11.999"></svg:path><svg:path fill="#5D6D3C" d="M17.146 9.794v.102a5.1 5.1 0 0 1-5.102 5.102H3.842A5.997 5.997 0 0 1 9.839 9h4.32c1.091 0 2.11.293 2.987.793"></svg:path></svg:g>`,
})
export class TokenBrandedBobaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
