import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWrldIcon],svg[token-wrld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.315l-9 3.79v3.79l9 3.789l9-3.79v-3.79zm0 1.421l7.579 3.16L12 14.368l-7.579-3.472z"></svg:path>`,
})
export class TokenWrldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
