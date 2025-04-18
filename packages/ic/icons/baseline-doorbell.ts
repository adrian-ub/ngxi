import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDoorbellIcon],svg[ic-baseline-doorbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 9v12h16V9zm0 14.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1m4-1.5H8v-1h1v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25c1.44.34 2.25 1.62 2.25 3.16V15h1z"></svg:path>`,
})
export class IcBaselineDoorbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
