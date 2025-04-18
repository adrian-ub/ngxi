import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKettleOneIcon],svg[icon-park-kettle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 14H30C30 14 38 18.1481 38 27.7993C38 37.4504 30 42 30 42H13C13 42 6 35.9785 6 28C6 20.0215 13 14 13 14Z"></svg:path><svg:path d="M38 27.9998C25 24.9998 19 33.9998 6 27.9998"></svg:path><svg:path d="M31 14H40C40 14 44 18 44 30"></svg:path><svg:path fill="#2F88FF" d="M9 6L32 8.66667L31 14H13L9 6Z"></svg:path></svg:g>`,
})
export class IconParkKettleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
