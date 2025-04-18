import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMantraIcon],svg[token-mantra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3l2 1.92l-2 1.9l-2-1.9zm-1.66 7.3c.92.88 2.4.88 3.32 0L19 5l2 1.5V21h-2V8.42l-3.34 3.14c-1 .96-2.34 1.44-3.66 1.44s-2.66-.48-3.66-1.44L5 8.4V21H3V6.5L5 5z" clip-rule="evenodd"></svg:path>`,
})
export class TokenMantraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
