import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherBriefcaseIcon],svg[feather-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="14" x="2" y="7" rx="2" ry="2"></svg:rect><svg:path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></svg:path></svg:g>`,
})
export class FeatherBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
