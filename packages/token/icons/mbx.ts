import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMbxIcon],svg[token-mbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.75V5.25h3.594l5.322 5.186l5.326-5.186H21v13.5h-.338l-2.345-2.306l-4.039-3.74l.13-.113l3.78 3.498V7.8l-6.272 5.709l-6.104-5.71v8.291l3.78-3.498l.13.112l-6.525 6.047H3.05l-.023-.023zm8.364-4.573l.13.112l-4.815 4.461H6.43zm-.45-.405l.13.112l-5.248 4.866h-.254zm-.427-.383l.13.113l-5.665 5.248h-.253l5.793-5.36zm-.416-.37l.129.112l-6.064 5.619h-.253zm2.565 1.158l-.13.112l4.815 4.461h.248zm.45-.405l-.13.112l5.248 4.866h.253zm.427-.383l-.13.113l5.665 5.248h.253l-5.793-5.36zm.416-.37l-.13.112l6.065 5.619h.253z"></svg:path>`,
})
export class TokenMbxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
