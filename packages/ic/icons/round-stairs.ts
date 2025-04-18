import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundStairsIcon],svg[ic-round-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 5h-1.42v3.33H13v3.33h-2.58l.03 3.34H7c-.55 0-1-.45-1-1s.45-1 1-1h1.42v-3.33H11V9.33h2.58V6H17c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundStairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
