import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRopeSkippingIcon],svg[icon-park-rope-skipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32C10 32 10 14.866 10 11C10 7.13401 13.134 4 17 4C20.866 4 24 7.13401 24 11C24 11 24 33.134 24 37C24 40.866 27.134 44 31 44C34.866 44 38 40.866 38 37V16"></svg:path><svg:path fill="#2F88FF" d="M41 4V16H35V4H41Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16H35M44 16H41M41 16V4H35V16M41 16H35"></svg:path><svg:path fill="#2F88FF" d="M7 44V32H13V44H7Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32H13M4 32H7M7 32V44H13V32M7 32H13"></svg:path></svg:g>`,
})
export class IconParkRopeSkippingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
