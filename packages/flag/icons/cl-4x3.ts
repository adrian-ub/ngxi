import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCl4x3Icon],svg[flag-cl-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCl4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagCl4x30)" transform="scale(.9375)"><svg:path fill="#fff" d="M256 0h512v256H256z"></svg:path><svg:path fill="#0039a6" d="M0 0h256v256H0z"></svg:path><svg:path fill="#fff" d="M167.8 191.7L128.2 162l-39.5 30l14.7-48.8L64 113.1l48.7-.5L127.8 64l15.5 48.5l48.7.1l-39.2 30.4z"></svg:path><svg:path fill="#d52b1e" d="M0 256h768v256H0z"></svg:path></svg:g>`,
})
export class FlagCl4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
