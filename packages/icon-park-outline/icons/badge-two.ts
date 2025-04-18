import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBadgeTwoIcon],svg[icon-park-outline-badge-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m16 44l8-4l8 4V24.944A11.96 11.96 0 0 1 24 28a11.96 11.96 0 0 1-8-3.056z"></svg:path><svg:path d="M36 16a11.97 11.97 0 0 1-4 8.944A11.96 11.96 0 0 1 24 28a11.96 11.96 0 0 1-8-3.056A11.97 11.97 0 0 1 12 16c0-6.627 5.373-12 12-12s12 5.373 12 12"></svg:path><svg:path d="M24 21V11l-2 1m2 9h2m-2 0h-2"></svg:path></svg:g>`,
})
export class IconParkOutlineBadgeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
