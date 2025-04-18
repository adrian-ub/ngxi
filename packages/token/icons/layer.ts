import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLayerIcon],svg[token-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.643h18V7.5H3zm0 6.428h18v3.858H3zM3 16.5h18v3.857H3z"></svg:path>`,
})
export class TokenLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
