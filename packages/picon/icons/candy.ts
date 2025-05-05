import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCandyIcon],svg[picon-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l2 1l1-1h2l1 1l2-1v4L6 5L5 6H3L2 5L0 6"></svg:path>`,
})
export class PiconCandyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
