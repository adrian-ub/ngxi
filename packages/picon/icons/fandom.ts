import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFandomIcon],svg[picon-fandom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V3L3 7l1 1M1 3v2l1.5 1.5l1-1M6 1L4.5 2.5l1 1L7 2M2 1L1 2l3 3l1-1M0 5V2l2-2l2 2l2-2l2 2v3L4 9"></svg:path>`,
})
export class PiconFandomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
