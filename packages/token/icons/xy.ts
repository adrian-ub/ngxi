import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXyIcon],svg[token-xy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 17.906l6.187-6.75l-4.5-5.062h6.188l1.688 1.687L16.5 3.844H21L5.812 20.156zm9.844-3.375l1.406 1.688h6.469l-4.5-5.063z"></svg:path>`,
})
export class TokenXyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
