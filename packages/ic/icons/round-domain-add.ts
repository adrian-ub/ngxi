import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDomainAddIcon],svg[ic-round-domain-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm6 12h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V8c0-.55-.45-1-1-1h-9V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13zm2-8h-2v2h2zm0 4h-2v2h2zm6 5c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1"></svg:path>`,
})
export class IcRoundDomainAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
