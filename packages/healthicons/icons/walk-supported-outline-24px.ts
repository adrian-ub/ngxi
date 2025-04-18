import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWalkSupportedOutline24pxIcon],svg[healthicons-walk-supported-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.25 6.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path><svg:path fill-rule="evenodd" d="M8.163 9.237a2.55 2.55 0 0 1 3.107-1.755c.307.082.573.244.78.458q.112.095.194.223L14.049 11H16a1 1 0 0 1 .026 2H20a2 2 0 0 1 2 2v7h-2v-7H4v7H2v-7a2 2 0 0 1 2-2h3.408a2 2 0 0 1-.004-1.132zM12.006 13h.945l-.775-1.218z" clip-rule="evenodd"></svg:path><svg:path d="m8.026 16l-.23 1.605L5.7 20.4a1 1 0 1 0 1.6 1.2l2.404-3.205l.342-2.395zm2.089 0l2.299 2.25l1.417 3.144a1 1 0 1 0 1.838-.788L14.086 17.2L12.895 16z"></svg:path></svg:g>`,
})
export class HealthiconsWalkSupportedOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
