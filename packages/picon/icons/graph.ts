import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGraphIcon],svg[picon-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V0h1v7h7v1M0 5l3-3l2 2l3-3v1L5 5L3 3L0 6"></svg:path>`,
})
export class PiconGraphIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
