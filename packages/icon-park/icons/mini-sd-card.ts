import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMiniSdCardIcon],svg[icon-park-mini-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M13.9979 18.7386L8 21.9228V44H40V4H13.9979V18.7386Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkMiniSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
