import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPresentToAllIcon],svg[ic-round-present-to-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-1 16.02H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.04c0 .55-.45 1-1 1M10 12H8l3.65-3.65c.2-.2.51-.2.71 0L16 12h-2v4h-4z"></svg:path>`,
})
export class IcRoundPresentToAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
