import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPokerDiamondsLineIcon],svg[ri-poker-diamonds-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.036 10.734a2 2 0 0 0 0 2.533l7.19 8.787a1 1 0 0 0 1.548 0l7.19-8.787a2 2 0 0 0 0-2.533l-7.19-8.788a1 1 0 0 0-1.548 0zM12 4.158L18.416 12L12 19.842L5.584 12z"></svg:path>`,
})
export class RiPokerDiamondsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
