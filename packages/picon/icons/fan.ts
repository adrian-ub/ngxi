import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFanIcon],svg[picon-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L2 2.5L4 4m0 0l2 1.5L4 8m0-4l1.5-2L8 4M0 4l2.5 2L4 4"></svg:path>`,
})
export class PiconFanIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
