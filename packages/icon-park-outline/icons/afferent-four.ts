import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAfferentFourIcon],svg[icon-park-outline-afferent-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 5H10a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V24.75"></svg:path><svg:path d="M33 24H21V12m0 12L39 6"></svg:path></svg:g>`,
})
export class IconParkOutlineAfferentFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
