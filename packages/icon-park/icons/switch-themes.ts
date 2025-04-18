import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchThemesIcon],svg[icon-park-switch-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M23 4V27H43.9933L44 4H23Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M31.0049 43.9998C24.6752 43.9998 20.5595 43.9998 18.6579 43.9998C16.9557 43.9998 14.9159 43.4318 13.5475 41.6126C12.6229 40.3832 12.0049 38.5826 12.0049 35.9998C12.0049 31.7298 12.0049 28.063 12.0049 24.9995"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 32.9998L12.0046 24.9995L20.0138 32.9998"></svg:path><svg:path stroke="#fff" d="M30 19H37"></svg:path><svg:path stroke="#fff" d="M30 12H37"></svg:path></svg:g>`,
})
export class IconParkSwitchThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
