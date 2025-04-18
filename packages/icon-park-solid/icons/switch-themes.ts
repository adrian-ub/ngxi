import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwitchThemesIcon],svg[icon-park-solid-switch-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSwitchThemes0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M23 4v23h20.993L44 4z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M31.005 44H18.658c-1.702 0-3.742-.568-5.11-2.387c-.925-1.23-1.543-3.03-1.543-5.613V25"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m4 33l8.005-8l8.009 8"></svg:path><svg:path stroke="#000" d="M30 19h7m-7-7h7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSwitchThemes0)"></svg:path>`,
})
export class IconParkSolidSwitchThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
