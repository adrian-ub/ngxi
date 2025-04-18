import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineHdIcon],svg[ic-baseline-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4zm1.5 4.5h2v-3h-2z"></svg:path>`,
})
export class IcBaselineHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
