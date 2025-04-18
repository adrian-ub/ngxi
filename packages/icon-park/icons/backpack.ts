import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBackpackIcon],svg[icon-park-backpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M19 9.55556V4H13V14"></svg:path><svg:path stroke="#000" d="M29 9.55556V4H35V14"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M11 20C11 14.4772 15.4772 10 21 10H27C32.5228 10 37 14.4772 37 20V40C37 42.2091 35.2091 44 33 44H15C12.7909 44 11 42.2091 11 40V20Z"></svg:path><svg:path stroke="#000" d="M11 29H5V39H11"></svg:path><svg:path stroke="#000" d="M37 29H43V39H37"></svg:path><svg:path stroke="#fff" d="M28 23V27"></svg:path><svg:path stroke="#fff" d="M17 23H27.5H31"></svg:path></svg:g>`,
})
export class IconParkBackpackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
