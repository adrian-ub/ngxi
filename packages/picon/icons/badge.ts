import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBadgeIcon],svg[picon-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1q1-2 2 0q3-1 2 2q2 1 0 2q1 3-2 2q-1 2-2 0q-3 1-2-2q-2-1 0-2q-1-3 2-2"></svg:path>`,
})
export class PiconBadgeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
