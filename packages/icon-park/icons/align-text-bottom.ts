import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextBottomIcon],svg[icon-park-align-text-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 36.3056H42"></svg:path><svg:path d="M6 42H42"></svg:path><svg:path d="M30 23L24 29L18 23V23"></svg:path><svg:path d="M24 6V29"></svg:path></svg:g>`,
})
export class IconParkAlignTextBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
