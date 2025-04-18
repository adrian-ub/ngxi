import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSwapVerticalCircleIcon],svg[ic-round-swap-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5z"></svg:path>`,
})
export class IcRoundSwapVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
