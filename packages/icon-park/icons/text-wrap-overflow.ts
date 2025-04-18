import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextWrapOverflowIcon],svg[icon-park-text-wrap-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M8 10V38"></svg:path><svg:path d="M24 4V16"></svg:path><svg:path d="M16 24H42"></svg:path><svg:path stroke-linejoin="round" d="M37.0561 19.0113L42.0929 24.0255L37.0561 29.123"></svg:path><svg:path d="M24 32V44"></svg:path></svg:g>`,
})
export class IconParkTextWrapOverflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
