import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEjectIcon],svg[whh-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 511q-40-37-13-62L474 14q15-14 37.5-14T550 14l463 435q27 26-13 62zm104 256h768q53 0 90.5 37.5T1024 895t-37.5 90.5T896 1023H128q-53 0-90.5-37.5T0 895t37.5-90.5T128 767"></svg:path>`,
})
export class WhhEjectIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
