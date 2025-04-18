import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWarehousingIcon],svg[icon-park-twotone-warehousing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWarehousing0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24H18m6-6l-6 6l6 6"></svg:path><svg:circle cx="38" cy="24" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" d="M40.706 13A20 20 0 0 0 38 9.717A19.93 19.93 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.45 0 10.392-2.18 14-5.717A20 20 0 0 0 40.706 35"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWarehousing0)"></svg:path>`,
})
export class IconParkTwotoneWarehousingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
