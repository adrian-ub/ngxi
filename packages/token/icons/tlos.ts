import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTlosIcon],svg[token-tlos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 3a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path>`,
})
export class TokenTlosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
