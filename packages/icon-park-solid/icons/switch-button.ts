import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwitchButtonIcon],svg[icon-park-solid-switch-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSwitchButton0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M36 4H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Zm0 24H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Z"></svg:path><svg:path fill="#000" stroke="#000" d="M36 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM12 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSwitchButton0)"></svg:path>`,
})
export class IconParkSolidSwitchButtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
