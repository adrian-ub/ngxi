import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWikenIcon],svg[token-wiken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.929h18l-6.6 8.143l-2.4-2.91l-2.4 2.91zm11.417 6l4.226-4.715H5.357l4.226 4.715L12 11.357z"></svg:path>`,
})
export class TokenWikenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
