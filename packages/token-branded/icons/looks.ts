import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLooksIcon],svg[token-branded-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#04CD58" d="M21 10.25L15.6 5H8.4L3 10.25L12 19zm-2.5.25s-5.98-9-13 0c7 9 13 0 13 0"></svg:path><svg:path fill="#F0F3FA" d="M15 10.5a3 3 0 1 0-6 0a3 3 0 0 0 6.001 0m-1.5 0A1.5 1.5 0 0 0 12 9c-.835 0-1.5.665-1.5 1.5S11.165 12 12 12s1.5-.665 1.5-1.5"></svg:path></svg:g>`,
})
export class TokenBrandedLooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
