import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHelloIcon],svg[token-hello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.237 4.368a8.992 8.992 0 0 0 0 15.264zm3.175 16.491a9 9 0 0 0 3.176 0v-6.668l-3.176.407zm6.351-1.227a8.992 8.992 0 0 0 0-15.264zM13.588 3.14v7.88l-3.176.45V3.14a9 9 0 0 1 3.176 0"></svg:path>`,
})
export class TokenHelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
