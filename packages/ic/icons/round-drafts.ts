import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDraftsIcon],svg[ic-round-drafts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.99 8c0-.72-.37-1.35-.94-1.7l-8.04-4.71c-.62-.37-1.4-.37-2.02 0L2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-11.05 4.34l-7.2-4.5l7.25-4.25c.62-.37 1.4-.37 2.02 0l7.25 4.25l-7.2 4.5c-.65.4-1.47.4-2.12 0"></svg:path>`,
})
export class IcRoundDraftsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
