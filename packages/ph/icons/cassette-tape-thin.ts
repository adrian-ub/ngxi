import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeThinIcon],svg[ph-cassette-tape-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h192a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12M72 196l18-24h76l18 24Zm156-4a4 4 0 0 1-4 4h-30l-22.8-30.4a4 4 0 0 0-3.2-1.6H88a4 4 0 0 0-3.2 1.6L62 196H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM176 84H80a28 28 0 0 0 0 56h96a28 28 0 0 0 0-56M60 112a20 20 0 1 1 20 20a20 20 0 0 1-20-20m39.57 20a27.94 27.94 0 0 0 0-40h56.86a27.94 27.94 0 0 0 0 40Zm76.43 0a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhCassetteTapeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
