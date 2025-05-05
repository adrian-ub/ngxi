import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTakeoffIcon],svg[picon-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7h8v1M1 5L0 3h1l1 1l2-1l-2-2h1l2 1l2-1h1v1L2 5"></svg:path>`,
})
export class PiconTakeoffIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
