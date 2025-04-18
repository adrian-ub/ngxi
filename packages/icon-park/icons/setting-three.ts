import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingThreeIcon],svg[icon-park-setting-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="15" fill="#2F88FF"></svg:circle><svg:path d="M24 39V44"></svg:path><svg:path d="M39 23H44"></svg:path><svg:path d="M4 23H9"></svg:path><svg:path d="M24 4V9"></svg:path><svg:path d="M34.6064 34.6064L38.142 38.142"></svg:path><svg:path d="M33.8994 12.6865L37.4349 9.15099"></svg:path><svg:path d="M9.15088 37.4351L12.6864 33.8995"></svg:path><svg:path d="M9.85791 9.85791L13.3934 13.3934"></svg:path></svg:g>`,
})
export class IconParkSettingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
