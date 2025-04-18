import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundFilter6Icon],svg[ic-round-filter-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1m19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m-7-2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2m0-4h2v2h-2z"></svg:path>`,
})
export class IcRoundFilter6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
