import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLooksIcon],svg[token-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M21 10.25L15.6 5H8.4L3 10.25L12 19zm-2.5.25s-5.98-9-13 0c7 9 13 0 13 0"></svg:path><svg:path d="M15 10.501a3.001 3.001 0 1 0-6.002 0a3.001 3.001 0 0 0 6.002 0m-1.5 0a1.5 1.5 0 0 0-1.5-1.5c-.835 0-1.5.665-1.5 1.5s.665 1.5 1.5 1.5s1.5-.665 1.5-1.5"></svg:path></svg:g>`,
})
export class TokenLooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
