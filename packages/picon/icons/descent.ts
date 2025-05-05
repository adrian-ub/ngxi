import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDescentIcon],svg[picon-descent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 2l2-2l1 3m0 3v2H6L0 2V0h2v2h2v2h2v2"></svg:path>`,
})
export class PiconDescentIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
