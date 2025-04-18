import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSdCardIcon],svg[icon-park-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M8 12V44H40V4H14L8 12Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 15V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
