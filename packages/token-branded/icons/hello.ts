import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHelloIcon],svg[token-branded-hello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7.237 4.368a8.992 8.992 0 0 0 0 15.264zm3.175 16.492a9 9 0 0 0 3.176 0v-6.67l-3.176.407zm6.351-1.228a8.992 8.992 0 0 0 0-15.264zM13.588 3.14v7.88l-3.176.45V3.14a9 9 0 0 1 3.176 0"></svg:path>`,
})
export class TokenBrandedHelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
