import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPlayDisabledIcon],svg[ic-round-play-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.1 3.51a.996.996 0 0 0 0 1.41l5.9 5.9v6.35c0 .79.87 1.27 1.54.84l3.45-2.2l6.08 6.08a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0m15.58 9.33a1 1 0 0 0 0-1.69L9.54 5.98a1.01 1.01 0 0 0-.84-.11l7.75 7.75z"></svg:path>`,
})
export class IcRoundPlayDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
