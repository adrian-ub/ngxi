import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRIcon],svg[token-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.188 18.75V6.795l4.993 2.783l-3.869 2.036v3.76L18.187 21v-4.077l-4.584-3.277l4.022-2.111v-3.77L9.188 3L5.812 4.687V21z"></svg:path>`,
})
export class TokenRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
