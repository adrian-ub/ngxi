import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGamepadIcon],svg[icon-park-outline-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="28" x="4" y="13" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="14"></svg:rect><svg:circle cx="31" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="35" cy="27" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 27h10m-10 0h10m2-20v6m0-6v6m-7 9v10"></svg:path></svg:g>`,
})
export class IconParkOutlineGamepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
