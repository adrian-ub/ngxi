import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePottedFlowerTulipSolidIcon],svg[streamline-potted-flower-tulip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.249.068a.5.5 0 0 1 .5-.002L7 1.924L10.252.066A.5.5 0 0 1 11 .5V4c0 1.953-1.4 3.579-3.25 3.93v3.086A3 3 0 0 1 10 10h2a.5.5 0 0 1 .5.5v.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-.5A.5.5 0 0 1 2 10h2c.896 0 1.7.393 2.25 1.016V7.93A4 4 0 0 1 3 4V.5a.5.5 0 0 1 .249-.432" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePottedFlowerTulipSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
