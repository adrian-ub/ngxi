import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMobileIcon],svg[token-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.594a1.5 1.5 0 0 1 3 0v10.812a1.5 1.5 0 0 1-3 0zm15 0a1.5 1.5 0 0 1 3 0v10.812a1.5 1.5 0 1 1-3 0zM8.1 9.3a1.506 1.506 0 0 0-1.5 1.518v6.564c0 .84.672 1.518 1.5 1.518s1.5-.678 1.5-1.518v-6.564c0-.84-.672-1.518-1.5-1.518m6.3 1.518c0-.84.672-1.518 1.5-1.518s1.5.678 1.5 1.518v6.564c0 .84-.672 1.518-1.5 1.518a1.505 1.505 0 0 1-1.5-1.518zM12 13.53a1.5 1.5 0 0 0-1.5 1.494v2.382a1.5 1.5 0 1 0 3 0v-2.382a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class TokenMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
