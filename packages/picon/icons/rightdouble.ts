import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRightdoubleIcon],svg[picon-rightdouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l2 2l-2 2l1 1l3-3l-3-3m3 1l2 2l-2 2l1 1l3-3l-3-3"></svg:path>`,
})
export class PiconRightdoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
