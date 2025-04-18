import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkCloudIcon],svg[icon-park-link-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 33C9.66666 33 4 31.5 4 25.5C4 18.5 11 17 13 17C14 13.5 16 8 24 8C31 8 34 12 35 15.5C35 15.5 44 16.5 44 25C44 31 39 33 35 33H22"></svg:path><svg:path d="M27 28L22 33L27 38"></svg:path></svg:g>`,
})
export class IconParkLinkCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
