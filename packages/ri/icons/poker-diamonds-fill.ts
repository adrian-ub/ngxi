import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPokerDiamondsFillIcon],svg[ri-poker-diamonds-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.036 10.734l7.19-8.788a1 1 0 0 1 1.548 0l7.19 8.788a2 2 0 0 1 0 2.533l-7.19 8.787a1 1 0 0 1-1.548 0l-7.19-8.787a2 2 0 0 1 0-2.533"></svg:path>`,
})
export class RiPokerDiamondsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
