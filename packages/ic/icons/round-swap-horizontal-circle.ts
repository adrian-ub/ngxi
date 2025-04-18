import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSwapHorizontalCircleIcon],svg[ic-round-swap-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-7-5.5l3.15 3.15c.2.2.2.51 0 .71L15 13.5V11h-4V9h4zm-6 11l-3.15-3.15c-.2-.2-.2-.51 0-.71L9 10.5V13h4v2H9z"></svg:path>`,
})
export class IcRoundSwapHorizontalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
