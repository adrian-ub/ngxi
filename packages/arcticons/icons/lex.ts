import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLexIcon],svg[arcticons-lex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.957 17v13.913h6.956m9.044-1.653C26.435 30.305 25.217 31 24 31h0a3.49 3.49 0 0 1-3.478-3.478V25.26A3.49 3.49 0 0 1 24 21.783h0a3.49 3.49 0 0 1 3.478 3.478v1.217h-6.956m16.522-4.695L30.087 31m6.957 0l-6.957-9.217"></svg:path>`,
})
export class ArcticonsLexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
