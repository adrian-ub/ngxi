import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundVerticalDistributeIcon],svg[ic-round-vertical-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 3c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1M7 12c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5m-5 9c0 .55.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1H3c-.55 0-1 .45-1 1"></svg:path>`,
})
export class IcRoundVerticalDistributeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
