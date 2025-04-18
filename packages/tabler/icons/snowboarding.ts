import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSnowboardingIcon],svg[tabler-snowboarding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0M7 19l4-2.5l-.5-1.5m5.5 6l-1-6l-4.5-3L14 6"></svg:path><svg:path d="m7 9l1.5-3H14l2 4l3 1M3 17q.598 1.732 1.5 1.951c6 1.464 10.772 2.262 13.5 2.927q2 .488 3-.976"></svg:path></svg:g>`,
})
export class TablerSnowboardingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
