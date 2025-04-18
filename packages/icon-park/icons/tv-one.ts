import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTvOneIcon],svg[icon-park-tv-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 12H6C4.89543 12 4 12.8954 4 14V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V14C44 12.8954 43.1046 12 42 12Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M31 19H11V35H31V19Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 4.5L23.0909 12L34 2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 25V26"></svg:path></svg:g>`,
})
export class IconParkTvOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
