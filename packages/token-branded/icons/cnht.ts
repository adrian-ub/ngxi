import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCnhtIcon],svg[token-branded-cnht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M17.631 3.9H6.343L3 11.237l9 8.863l9-8.863z"></svg:path><svg:path fill="#009F74" d="M12.002 12.45c2.983 0 5.4-.604 5.4-1.35s-2.418-1.35-5.4-1.35s-5.4.604-5.4 1.35s2.418 1.35 5.4 1.35"></svg:path><svg:path fill="#fff" d="M12 12c2.734 0 4.95-.403 4.95-.9s-2.216-.9-4.95-.9s-4.95.403-4.95.9s2.217.9 4.95.9"></svg:path><svg:path fill="#009F74" d="M11.1 16.5v-4.172h1.8V16.5zm4.95-9.9h-8.1v1.8h3.15v3.15h1.8V8.4h3.15z"></svg:path></svg:g>`,
})
export class TokenBrandedCnhtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
