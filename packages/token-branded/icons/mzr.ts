import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMzrIcon],svg[token-branded-mzr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M20.4 21V3L12 9.84L3.6 3v18l4.2-3.504v-6.354l4.2 3.63l4.2-3.63v6.36zM12 12.816L6.384 8.088v8.556l-1.302.978V6.096L12 11.754zm0 0l5.598-4.728v8.556l1.32.978V6.096L12 11.754zm-2.4 4.848l2.406 2.256l2.394-2.256v-2.778l-2.394 2.28L9.6 14.88z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedMzrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
