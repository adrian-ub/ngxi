import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCw1x1Icon],svg[flag-cw-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagCw1x10"><svg:path fill-opacity=".7" d="M0 0h9000v9000H0z"></svg:path></svg:clippath><svg:path id="flagCw1x11" d="m0-1l.2.7H1L.3 0l.2.7L0 .4l-.6.4l.2-.7l-.5-.4h.7z"></svg:path></svg:defs><svg:g clip-path="url(#flagCw1x10)" transform="scale(.057)"><svg:path fill="#002b7f" d="M0 0h13500v9000H0z"></svg:path><svg:path fill="#f9e814" d="M0 5625h13500v1125H0z"></svg:path><svg:use width="13500" height="9000" x="2" y="2" fill="#fff" href="#flagCw1x11" transform="scale(750)"></svg:use><svg:use width="13500" height="9000" x="3" y="3" fill="#fff" href="#flagCw1x11" transform="scale(1000)"></svg:use></svg:g>`,
})
export class FlagCw1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
