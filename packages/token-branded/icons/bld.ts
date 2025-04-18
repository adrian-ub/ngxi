import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBldIcon],svg[token-branded-bld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#BB2D40"><svg:path d="M3 10.155h3.692v3.692H3z"></svg:path><svg:path fill-rule="evenodd" d="M21 6.462H9.923v11.076H21zm-3.692 3.692h-3.692v3.692h3.692z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class TokenBrandedBldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
