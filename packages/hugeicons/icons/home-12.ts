import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHome12Icon],svg[hugeicons-home-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.164 11.35l.836.209l.457 4.542c.258 2.566.387 3.849 1.244 4.624s2.147.775 4.726.775h3.146c2.58 0 3.87 0 4.726-.775c.857-.775.986-2.058 1.244-4.625L20 11.56l.836-.21a1.537 1.537 0 0 0 .509-2.75l-8.198-5.737a2 2 0 0 0-2.294 0L2.655 8.6a1.537 1.537 0 0 0 .51 2.75"></svg:path><svg:path d="M15 16c-.8.622-1.85 1-3 1s-2.2-.378-3-1"></svg:path></svg:g>`,
})
export class HugeiconsHome12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
