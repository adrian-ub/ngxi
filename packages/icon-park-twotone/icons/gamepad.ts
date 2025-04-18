import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGamepadIcon],svg[icon-park-twotone-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGamepad0"><svg:g fill="none"><svg:rect width="40" height="28" x="4" y="13" fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="14"></svg:rect><svg:circle cx="31" cy="22" r="2" fill="#fff"></svg:circle><svg:circle cx="35" cy="27" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 27h10m-10 0h10m2-20v6m0-6v6m-7 9v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGamepad0)"></svg:path>`,
})
export class IconParkTwotoneGamepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
