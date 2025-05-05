import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLeftdoubleIcon],svg[picon-leftdouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2L6 4l2 2l-1 1l-3-3l3-3M4 2L2 4l2 2l-1 1l-3-3l3-3"></svg:path>`,
})
export class PiconLeftdoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
