import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDataScreenIcon],svg[icon-park-solid-data-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDataScreen0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 36v7"></svg:path><svg:path stroke="#000" d="M32 14L16 28"></svg:path><svg:path stroke="#fff" d="M10 43h28"></svg:path><svg:circle cx="15" cy="17" r="3" fill="#000" stroke="#000"></svg:circle><svg:circle cx="33" cy="25" r="3" fill="#000" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDataScreen0)"></svg:path>`,
})
export class IconParkSolidDataScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
