import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEqualRatioIcon],svg[icon-park-outline-equal-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M24 22.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 17v14m17-14v14"></svg:path></svg:g>`,
})
export class IconParkOutlineEqualRatioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
