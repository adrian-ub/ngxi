import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundArtTrackIcon],svg[ic-round-art-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1m0-6h-6c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1m-6 10h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1m-3-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2m-2.1 5.2l-1.26-1.68a.508.508 0 0 0-.8-.01L6.5 14.26l-.85-1.03a.5.5 0 0 0-.78.01l-.74.95a.5.5 0 0 0 .39.81H9.5a.5.5 0 0 0 .4-.8"></svg:path>`,
})
export class IcRoundArtTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
