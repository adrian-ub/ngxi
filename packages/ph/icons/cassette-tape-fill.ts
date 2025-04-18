import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCassetteTapeFillIcon],svg[ph-cassette-tape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156.3 96a31.92 31.92 0 0 0 0 32H99.7a31.92 31.92 0 0 0 0-32ZM72 96a16 16 0 1 0 16 16a16 16 0 0 0-16-16m168-32v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16m-54 128l-15.6-20.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L70 192Zm30-80a32 32 0 0 0-32-32H72a32 32 0 0 0 0 64h112a32 32 0 0 0 32-32m-32-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhCassetteTapeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
