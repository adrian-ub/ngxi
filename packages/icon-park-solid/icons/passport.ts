import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPassportIcon],svg[icon-park-solid-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPassport0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M10 10h28v34H10z"></svg:path><svg:path stroke="#fff" d="m10 10l22-6v6"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#fff" stroke="#000"></svg:circle><svg:path stroke="#000" d="M20 34h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPassport0)"></svg:path>`,
})
export class IconParkSolidPassportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
