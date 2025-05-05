import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLoopIcon],svg[picon-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 3L8 5H7v2H1V6h5V5H5M0 3h1V1h6v1H2v1h1L1.5 5"></svg:path>`,
})
export class PiconLoopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
