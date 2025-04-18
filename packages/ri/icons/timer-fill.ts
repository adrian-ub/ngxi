import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTimerFillIcon],svg[ri-timer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.618 5.968l1.453-1.453l1.414 1.414l-1.453 1.453A9 9 0 1 1 12 4c2.125 0 4.078.736 5.618 1.968M11 8v6h2V8zM8 1h8v2H8z"></svg:path>`,
})
export class RiTimerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
