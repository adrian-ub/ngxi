import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCl1x1Icon],svg[flag-cl-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCl1x10"><svg:path fill-opacity=".7" d="M0 0h708.7v708.7H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagCl1x10)" transform="scale(.722)"><svg:path fill="#fff" d="M354.3 0H1063v354.3H354.3z"></svg:path><svg:path fill="#0039a6" d="M0 0h354.3v354.3H0z"></svg:path><svg:path fill="#fff" d="m232.3 265.3l-55-41.1l-54.5 41.5l20.3-67.5l-54.5-41.7l67.4-.6l21-67.3l21.3 67.2h67.5L211.4 198z"></svg:path><svg:path fill="#d52b1e" d="M0 354.3h1063v354.4H0z"></svg:path></svg:g>`,
})
export class FlagCl1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
