import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidConsignmentIcon],svg[icon-park-solid-consignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSConsignment0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M8 14a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 12v20m16-20v20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 12h8m-24 0h8m-8 20h8m8 0h8M4 38h40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 38v2m-6-2v2m-6-2v2m18-2v2m6-2v2m6-2v2m6-2v2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 12V6H18v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSConsignment0)"></svg:path>`,
})
export class IconParkSolidConsignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
