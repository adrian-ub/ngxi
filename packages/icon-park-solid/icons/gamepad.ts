import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGamepadIcon],svg[icon-park-solid-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSGamepad0"><svg:g fill="none"><svg:rect width="40" height="28" x="4" y="13" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="14"></svg:rect><svg:circle cx="31" cy="22" r="2" fill="#000"></svg:circle><svg:circle cx="35" cy="27" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 27h10m-10 0h10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7v6m0-6v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 22v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSGamepad0)"></svg:path>`,
})
export class IconParkSolidGamepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
