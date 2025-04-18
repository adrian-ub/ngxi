import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShieldAddIcon],svg[icon-park-solid-shield-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShieldAdd0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M23.95 14.95v16m-8-8h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShieldAdd0)"></svg:path>`,
})
export class IconParkSolidShieldAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
