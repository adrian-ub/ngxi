import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPr1x1Icon],svg[flag-pr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagPr1x10"><svg:path fill-opacity=".7" d="M51.6 0h708.7v708.7H51.6z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagPr1x10)" transform="translate(-37.3)scale(.72249)"><svg:path fill="#ed0000" d="M0 0h1063v708.7H0z"></svg:path><svg:path fill="#fff" d="M0 141.7h1063v141.8H0zm0 283.5h1063v141.7H0z"></svg:path><svg:path fill="#0050f0" d="m0 0l610 353.9L0 707.3z"></svg:path><svg:path fill="#fff" d="m268.2 450.5l-65.7-49l-65.3 49.5l24.3-80.5l-65.3-49.7l80.7-.7l25-80.2l25.6 80l80.7.1l-64.9 50.2z"></svg:path></svg:g>`,
})
export class FlagPr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
