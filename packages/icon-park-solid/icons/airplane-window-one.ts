import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAirplaneWindowOneIcon],svg[icon-park-solid-airplane-window-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAirplaneWindowOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="m30.349 32l6.506-24.282a3 3 0 0 1 3.675-2.122v0a3 3 0 0 1 2.12 3.675L36.56 32"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" d="M36 32v6H13a3 3 0 1 1 0-6z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 44h8"></svg:path><svg:rect width="10" height="20" x="6" y="4" fill="#fff" stroke="#fff" rx="5"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M6 14h10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 9v10M16 9v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAirplaneWindowOne0)"></svg:path>`,
})
export class IconParkSolidAirplaneWindowOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
