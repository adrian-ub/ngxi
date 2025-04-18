import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRoundFillIcon],svg[lets-icons-done-round-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.548 7.267a2 2 0 1 0-3.096-2.533L8.666 14.25L6.2 12.4a2 2 0 0 0-2.4 3.2l3.233 2.425a3 3 0 0 0 4.122-.5z"></svg:path>`,
})
export class LetsIconsDoneRoundFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
