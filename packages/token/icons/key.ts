import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKeyIcon],svg[token-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 16.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 3L4 7.485v8.99L12 21l8-4.525v-8.99zm2.045 3.5H11.54c-.19.005-.53.14-.54.615v6.448a2 2 0 1 0 1 0V9.5h1.58c.15 0 .42-.17.42-.5c0-.325-.265-.5-.42-.5H12v-1h2.05c.175 0 .45-.195.45-.5a.48.48 0 0 0-.455-.5" clip-rule="evenodd"></svg:path>`,
})
export class TokenKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
