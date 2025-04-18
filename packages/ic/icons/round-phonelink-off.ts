import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPhonelinkOffIcon],svg[ic-round-phonelink-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 19V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93M21 6c.55 0 1-.45 1-1s-.45-1-1-1H7.39l2 2zM1.36 2.21a.996.996 0 0 0 0 1.41l1.11 1.11C2.18 5.08 2 5.52 2 6v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20h16.23l1.64 1.64a.996.996 0 1 0 1.41-1.41L2.77 2.21a.996.996 0 0 0-1.41 0M4 17V6.27L14.73 17z"></svg:path>`,
})
export class IcRoundPhonelinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
