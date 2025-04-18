import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAcriaIcon],svg[token-branded-acria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M10.313 11.156H7.78L12 4.406l5.344 9.563H8.906l-1.969 3.375h1.97l1.687-2.813h2.812l1.688 2.813h2.25l-1.688-2.813h2.25L21 19.594h-7.313L12 16.219l-1.687 3.375H3l4.5-7.875h6.187L12 8.344z"></svg:path>`,
})
export class TokenBrandedAcriaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
