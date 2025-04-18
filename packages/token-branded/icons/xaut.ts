import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXautIcon],svg[token-branded-xaut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M12 12c2.734 0 4.95-.403 4.95-.9s-2.216-.9-4.95-.9s-4.95.403-4.95.9s2.216.9 4.95.9"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M17.631 3.9H6.343L3 11.238l9 8.862l9-8.862zM12.9 12.432c2.555-.107 4.502-.662 4.502-1.332c0-.745-2.418-1.35-5.4-1.35s-5.4.605-5.4 1.35c0 .67 1.945 1.224 4.498 1.331v4.07h1.8z" clip-rule="evenodd"></svg:path><svg:path fill="#DDA85B" d="M16.05 6.6h-8.1v1.8h3.15v3.15h1.8V8.4h3.15z"></svg:path></svg:g>`,
})
export class TokenBrandedXautIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
