import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDogIcon],svg[token-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.093 21v-7.875h-2.25v-2.25h2.25V3h6.184c5.398 0 8.059 3.98 7.87 9.042C19.96 17.057 17.832 21 12.277 21zM8.342 5.25v5.625h4.497v2.25H8.342v5.625h3.935c4.317 0 5.48-2.97 5.623-6.792c.142-3.81-1.499-6.708-5.623-6.708z"></svg:path>`,
})
export class TokenDogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
