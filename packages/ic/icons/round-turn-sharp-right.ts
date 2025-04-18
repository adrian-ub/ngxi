import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTurnSharpRightIcon],svg[ic-round-turn-sharp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6.83l-.88.88a.996.996 0 1 1-1.41-1.41l2.59-2.59a.996.996 0 0 1 1.41 0L20.3 6.3a.996.996 0 1 1-1.41 1.41L18 6.83V13c0 1.1-.9 2-2 2H8v5c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-1.1.9-2 2-2h8z"></svg:path>`,
})
export class IcRoundTurnSharpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
