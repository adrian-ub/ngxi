import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPesticideIcon],svg[icon-park-solid-pesticide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPesticide0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M15 11.368V4h18v7.368l6 6.119V42a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V17.486z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 23h8v12H9"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 11.5h18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 23v6m0 5v1"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9 38V20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPesticide0)"></svg:path>`,
})
export class IconParkSolidPesticideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
