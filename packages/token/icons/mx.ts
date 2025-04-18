import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMxIcon],svg[token-mx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 7.406a2.113 2.113 0 0 1 3.701 0l5.813 10.281H5.201c-1.691 0-2.748-1.871-1.905-3.369z"></svg:path><svg:path fill="currentColor" d="M16.8 7.406a2.113 2.113 0 0 0-3.701 0l-4.122 7.296c-.753 1.327.185 2.985 1.682 2.985h8.14c1.691 0 2.748-1.871 1.905-3.369z"></svg:path><svg:path fill="currentColor" d="M10.659 17.687h6.055L12 9.347l-3.028 5.355c-.748 1.326.19 2.985 1.687 2.985"></svg:path>`,
})
export class TokenMxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
