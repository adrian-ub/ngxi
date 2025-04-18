import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBroadcastRadioIcon],svg[icon-park-solid-broadcast-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSBroadcastRadio0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 12h40v28H4z"></svg:path><svg:path fill="#000" stroke="#000" d="M31 31a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 22h6m-6 8h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8 40v4m32-4v4M8 12l28-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSBroadcastRadio0)"></svg:path>`,
})
export class IconParkSolidBroadcastRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
