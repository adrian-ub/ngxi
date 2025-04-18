import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWavesIcon],svg[token-waves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 12l9-9l9 9l-9 9z"></svg:path>`,
})
export class TokenWavesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
