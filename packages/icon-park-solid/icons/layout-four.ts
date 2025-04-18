import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLayoutFourIcon],svg[icon-park-solid-layout-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSLayoutFour0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M6 28h18m0-8h18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 25v6m36-14v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 42V6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 6h6m-6 36h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLayoutFour0)"></svg:path>`,
})
export class IconParkSolidLayoutFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
