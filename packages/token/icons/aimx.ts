import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAimxIcon],svg[token-aimx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.628 3.915l-.084.064c-1.223 1.274-.457 4.125-1.126 6.37c-.63 2.124-3.867 3.333-5.238 4.633a3.212 3.212 0 1 0 4.408 4.646H8.6a2.4 2.4 0 0 0 .553-.856l.032-.09v-.032q.08-.195.129-.399c.618-2.265.232-6.113.76-7.49c.662-1.73 1.859-2.606 2.856-3.565c.689-.656 1.126-1.351 1.023-2.11V5.04a1.93 1.93 0 0 0-2.387-1.673a1.96 1.96 0 0 0-.94.547m6.511 14.844a1.931 1.931 0 1 0 3.863 0a1.931 1.931 0 0 0-3.863 0"></svg:path>`,
})
export class TokenAimxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
