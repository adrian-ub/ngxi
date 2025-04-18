import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingConfigIcon],svg[icon-park-setting-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41.5 10H35.5"></svg:path><svg:path d="M27.5 6V14"></svg:path><svg:path d="M27.5 10L5.5 10"></svg:path><svg:path d="M13.5 24H5.5"></svg:path><svg:path d="M21.5 20V28"></svg:path><svg:path d="M43.5 24H21.5"></svg:path><svg:path d="M41.5 38H35.5"></svg:path><svg:path d="M27.5 34V42"></svg:path><svg:path d="M27.5 38H5.5"></svg:path></svg:g>`,
})
export class IconParkSettingConfigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
