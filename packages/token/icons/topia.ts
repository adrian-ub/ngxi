import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTopiaIcon],svg[token-topia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.6 3h6.6v6h3.6V3h6.6v18h-6.6v-6h-3.6v6H3.6z"></svg:path>`,
})
export class TokenTopiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
