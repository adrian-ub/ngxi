import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightBoldIcon],svg[ph-arrows-left-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m216.49 184.49l-32 32a12 12 0 0 1-17-17L179 188H48a12 12 0 0 1 0-24h131l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17m-145-64a12 12 0 0 0 17-17L77 92h131a12 12 0 0 0 0-24H77l11.49-11.51a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17Z"></svg:path>`,
})
export class PhArrowsLeftRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
