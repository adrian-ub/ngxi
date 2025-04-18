import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDesoIcon],svg[token-deso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3v4.5l11.4 6.576L4.5 21h9.282c3.162 0 5.718-2.22 5.718-4.95V12z"></svg:path><svg:path fill="currentColor" d="m4.5 3l15 9V7.95C19.5 5.214 16.938 3 13.782 3zm7.71 8.946l-7.71 4.56V21l11.4-6.924z"></svg:path>`,
})
export class TokenDesoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
