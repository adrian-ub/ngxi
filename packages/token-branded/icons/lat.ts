import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLatIcon],svg[token-branded-lat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#050505" d="M7.105 5.25c-1.024 0-1.855.793-1.855 1.772V16.5H7.5v-9h9V5.25z"></svg:path><svg:path fill="#050505" d="M7.5 18.75V16.5h9v-9h2.25v9.478c0 .978-.83 1.772-1.855 1.772z"></svg:path><svg:path fill="#F8BD00" d="M9.75 9.75h4.5v4.5h-4.5z"></svg:path><svg:path fill="#00B6DE" d="M18.75 3H21v2.25h-2.25z"></svg:path><svg:path fill="#E30065" d="M3 18.75h2.25V21H3z"></svg:path></svg:g>`,
})
export class TokenBrandedLatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
