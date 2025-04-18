import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextWrapTruncationIcon],svg[icon-park-text-wrap-truncation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M8 8V40"></svg:path><svg:path d="M40 8V40"></svg:path><svg:path d="M20.0522 24.0083H40.0002"></svg:path></svg:g>`,
})
export class IconParkTextWrapTruncationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
