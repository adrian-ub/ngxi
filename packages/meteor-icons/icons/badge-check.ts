import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBadgeCheckIcon],svg[meteor-icons-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.5 12.5l2 2l5-5m4.3 5.7a1 1 0 0 0 0-6.4a1 1 0 0 0-4.6-4.6a1 1 0 0 0-6.4 0a1 1 0 0 0-4.6 4.6a1 1 0 0 0 0 6.4a1 1 0 0 0 4.6 4.6a1 1 0 0 0 6.4 0a1 1 0 0 0 4.6-4.6"></svg:path>`,
})
export class MeteorIconsBadgeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
