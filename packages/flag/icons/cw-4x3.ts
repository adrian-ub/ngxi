import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCw4x3Icon],svg[flag-cw-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCw4x30"><svg:path fill-opacity=".7" d="M0 0h682.7v512H0z"></svg:path></svg:clippath><svg:path id="flagCw4x31" d="m0-1l.2.7H1L.3 0l.2.7L0 .4l-.6.4l.2-.7l-.5-.4h.7z"></svg:path></svg:defs><svg:g clip-path="url(#flagCw4x30)" transform="scale(.94)"><svg:path fill="#002b7f" d="M0 0h768v512H0z"></svg:path><svg:path fill="#f9e814" d="M0 320h768v64H0z"></svg:path><svg:use width="13500" height="9000" x="2" y="2" fill="#fff" href="#flagCw4x31" transform="scale(42.67)"></svg:use><svg:use width="13500" height="9000" x="3" y="3" fill="#fff" href="#flagCw4x31" transform="scale(56.9)"></svg:use></svg:g>`,
})
export class FlagCw4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
