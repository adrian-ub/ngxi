import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOkIcon],svg[picon-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8L0 6V3l2-3l1 1l-1 3l2-1l2 1l-1 1l-1-1l-1 2l2 1V5l1 1v1L5 8"></svg:path>`,
})
export class PiconOkIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
