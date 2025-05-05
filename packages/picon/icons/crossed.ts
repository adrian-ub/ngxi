import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCrossedIcon],svg[picon-crossed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L2 1L1 2l2 2l-2 2l1 1l2-2l2 2l1-1l-2-2l2-2l-1-1M0 8V0h8v8"></svg:path>`,
})
export class PiconCrossedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
