import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShakeIcon],svg[picon-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 4l1-1l-2-2H2L0 0v4l1 1l2-2m5 2v1L6 8H5M0 5v2l4 1l4-4V0L6 1L3 0l3 3l-2 2l-1-1l-2 2"></svg:path>`,
})
export class PiconShakeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
