import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTusdIcon],svg[token-branded-tusd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1B5AFF" d="M9 3H3v6a6 6 0 0 0 6-6m0 18V8.994C9 5.682 11.478 3 14.844 3H21v6h-6v12z"></svg:path>`,
})
export class TokenBrandedTusdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
