import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRayIcon],svg[token-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v6l-7 3.88L5 16V8l7-3.894l5.506 2.928l.832-.468L12 3L4 7.501v8.998L12 21l8-4.501V9.288z"></svg:path><svg:path fill="currentColor" d="M10.5 16H9v-4h3.5c.76-.008 1.498-.508 1.5-1.28c.008-.758-.748-1.225-1.5-1.22H9V8h3.794c1.602 0 2.693 1.2 2.705 2.72c.014 1.642-1.286 2.78-3.108 2.78h-1.892z"></svg:path><svg:path fill="currentColor" d="M15.756 16h-1.743l-1.079-1.896c.427-.025 1.16-.2 1.574-.424zm2.494-7.48l.875.48l.875-.48V7.501L19.125 7l-.875.502z"></svg:path>`,
})
export class TokenRayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
