import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSettingThreeIcon],svg[icon-park-twotone-setting-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSettingThree0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="15" fill="#555"></svg:circle><svg:path d="M24 39v5m15-21h5M4 23h5M24 4v5m10.606 25.606l3.536 3.536M33.9 12.687l3.535-3.536M9.15 37.435l3.536-3.535M9.858 9.858l3.535 3.535"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSettingThree0)"></svg:path>`,
})
export class IconParkTwotoneSettingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
