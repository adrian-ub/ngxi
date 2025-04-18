import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSd1x1Icon],svg[flag-sd-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagSd1x10"><svg:path fill-opacity=".7" d="M0 0h496v496H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagSd1x10)" transform="scale(1.0321)"><svg:path fill="#000001" d="M0 330.7h992.1v165.4H0z"></svg:path><svg:path fill="#fff" d="M0 165.3h992.1v165.4H0z"></svg:path><svg:path fill="red" d="M0 0h992.9v165.4H0z"></svg:path><svg:path fill="#009a00" d="M0 0v496l330.7-248z"></svg:path></svg:g>`,
})
export class FlagSd1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
