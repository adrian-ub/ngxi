import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDefiIcon],svg[token-defi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.737 7.974v-3.79H21v3.79zm0 5.682v-3.79h9.474v3.79zm-4.737 0v-3.79h3.79v3.79zm4.737 6.16v-3.79H12v3.79z"></svg:path>`,
})
export class TokenDefiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
