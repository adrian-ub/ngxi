import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinBigUpIcon],svg[ci-thin-big-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ciThinBigUp0)"><svg:path fill="currentColor" d="M19.5 6.5L13 0L6.5 6.5l.707.707L12.5 1.914V24h1V1.914l5.293 5.293l.707-.707Z"></svg:path></svg:g><svg:defs><svg:clippath id="ciThinBigUp0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CiThinBigUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
