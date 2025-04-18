import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLvlIcon],svg[token-branded-lvl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFB313" d="M4.161 3h5.807v4.065H4.16zm0 6.968h9.871v4.064h-9.87zm0 6.968H19.84V21H4.16z"></svg:path>`,
})
export class TokenBrandedLvlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
