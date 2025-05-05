import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconUpdoubleIcon],svg[picon-updouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 7l2-2l2 2l1-1l-3-3l-3 3m1-2l2-2l2 2l1-1l-3-3l-3 3"></svg:path>`,
})
export class PiconUpdoubleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
