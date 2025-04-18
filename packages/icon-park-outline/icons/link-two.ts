import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLinkTwoIcon],svg[icon-park-outline-link-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 19H20a8 8 0 1 0 0 16h16a8 8 0 0 0 6-13.292"></svg:path><svg:path d="M6 24.292A8 8 0 0 1 12 11h16a8 8 0 1 1 0 16H18"></svg:path></svg:g>`,
})
export class IconParkOutlineLinkTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
