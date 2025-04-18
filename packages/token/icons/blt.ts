import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBltIcon],svg[token-blt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.635 3.104c-.92.745-2.333 2.336-2.333 4.208a2.615 2.615 0 0 0 2.626 2.604a2.615 2.615 0 0 0 2.625-2.604c0-1.872-1.412-3.463-2.333-4.208a.46.46 0 0 0-.585 0m.293 10.98a2.615 2.615 0 0 0-2.626 2.604c0 1.872 1.412 3.463 2.333 4.208a.46.46 0 0 0 .585 0c.921-.745 2.333-2.336 2.333-4.208a2.615 2.615 0 0 0-2.625-2.604m4.725.52A2.616 2.616 0 0 1 14.028 12a2.616 2.616 0 0 1 2.625-2.605c1.887 0 3.491 1.4 4.243 2.315a.45.45 0 0 1 0 .58c-.752.914-2.356 2.315-4.243 2.315M3.104 11.71c.752-.915 2.356-2.315 4.243-2.315A2.616 2.616 0 0 1 9.972 12a2.616 2.616 0 0 1-2.625 2.605c-1.887 0-3.491-1.4-4.243-2.316a.45.45 0 0 1 0-.579"></svg:path>`,
})
export class TokenBltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
