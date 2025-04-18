import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOppoCommunityIcon],svg[arcticons-oppo-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:ellipse cx="24" cy="20.908" rx="18.5" ry="14.263"></svg:ellipse><svg:ellipse cx="24" cy="27.092" rx="18.5" ry="14.263"></svg:ellipse></svg:g>`,
})
export class ArcticonsOppoCommunityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
