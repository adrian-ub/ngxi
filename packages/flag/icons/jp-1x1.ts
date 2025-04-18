import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagJp1x1Icon],svg[flag-jp-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagJp1x10"><svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#flagJp1x10)" transform="translate(-128)scale(.72249)"><svg:path fill="#fff" d="M0 0h1063v708.7H0z"></svg:path><svg:circle cx="523.1" cy="344.1" r="194.9" fill="#bc002d" transform="translate(-59.7 -34.5)scale(1.1302)"></svg:circle></svg:g>`,
})
export class FlagJp1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
