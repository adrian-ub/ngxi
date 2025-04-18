import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBalanceTwoIcon],svg[icon-park-twotone-balance-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBalanceTwo0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m16 22l-6-10l-6 10"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M10 28a6 6 0 0 0 6-6H4a6 6 0 0 0 6 6" clip-rule="evenodd"></svg:path><svg:path d="m44 22l-6-10l-6 10"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M38 28a6 6 0 0 0 6-6H32a6 6 0 0 0 6 6" clip-rule="evenodd"></svg:path><svg:path d="M24 6v36M10 12h28m-28 0h28m0 30H10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBalanceTwo0)"></svg:path>`,
})
export class IconParkTwotoneBalanceTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
