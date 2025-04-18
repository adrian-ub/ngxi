import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsModernTvIssueIcon],svg[hugeicons-modern-tv-issue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10s0 5.657-1.172 6.828S17.771 18 14 18h-4c-3.771 0-5.657 0-6.828-1.172S2 13.771 2 10m14 12a8.4 8.4 0 0 0-4-1a8.4 8.4 0 0 0-4 1m4-8h.009M12 11V7" color="currentColor"></svg:path>`,
})
export class HugeiconsModernTvIssueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
