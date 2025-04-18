import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBs1x1Icon],svg[flag-bs-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagBs1x10"><svg:path fill-opacity=".7" d="M56.6 26.4H537v480.3H56.6z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagBs1x10)" transform="matrix(1.066 0 0 1.067 -60.4 -28.1)"><svg:path fill="#fff" d="M990 506.2H9.4V27.6H990z"></svg:path><svg:path fill="#ffe900" d="M990 370.6H9.4V169.2H990z"></svg:path><svg:path fill="#08ced6" d="M990 506.2H9.4V346.7H990zm0-319H9.4V27.9H990z"></svg:path><svg:path fill="#000001" d="M9 25.9c2.1 0 392.3 237 392.3 237L7.8 505.3z"></svg:path></svg:g>`,
})
export class FlagBs1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
