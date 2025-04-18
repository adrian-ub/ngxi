import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNordIcon],svg[token-nord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.773 12.402a.72.72 0 0 0 0-1.049l-8.228-7.878a.8.8 0 0 0-1.095 0l-8.223 7.878a.72.72 0 0 0 0 1.05l1.183 1.13a.803.803 0 0 0 1.095 0l5.945-5.697a.8.8 0 0 1 1.1 0l5.955 5.687a.79.79 0 0 0 1.096 0z"></svg:path><svg:path fill="currentColor" d="M7.08 16.135a.756.756 0 0 1 0-1.07l4.386-4.386a.754.754 0 0 1 1.07 0l4.386 4.386a.76.76 0 0 1 0 1.07l-4.387 4.387a.76.76 0 0 1-1.07 0z"></svg:path>`,
})
export class TokenNordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
