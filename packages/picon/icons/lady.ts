import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconLadyIcon],svg[picon-lady-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0L3 1l1 1l1-1M3 8V6H2l1-3l-1 2H1l2-3h2l2 3H6L5 3l1 3H5v2"></svg:path>`,
})
export class PiconLadyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
