import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNoSimIcon],svg[ic-round-no-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.09 4.44a.996.996 0 0 0 0 1.41l2.03 2.03l-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0M19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06z"></svg:path>`,
})
export class IcRoundNoSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
