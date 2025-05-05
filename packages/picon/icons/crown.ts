import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCrownIcon],svg[picon-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6L0 1l2 2h1l1-2l1 2h1l2-2l-1 5"></svg:path>`,
})
export class PiconCrownIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
