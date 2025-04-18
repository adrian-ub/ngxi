import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riP2pFillIcon],svg[ri-p2p-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2zM7 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6m10-7a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4M3 21a4 4 0 0 1 8 0z"></svg:path>`,
})
export class RiP2pFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
