import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGseIcon],svg[token-gse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.625 12a5.627 5.627 0 0 1-6.722 5.517A5.626 5.626 0 0 1 12 6.375V3a9 9 0 1 0 9 9zm0-3.938V12h-3.938V8.062zm0 0v-2.25h2.25v2.25z"></svg:path>`,
})
export class TokenGseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
