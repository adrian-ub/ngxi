import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAdjacentItemIcon],svg[icon-park-twotone-adjacent-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAdjacentItem0"><svg:g fill="none"><svg:path fill="#555" d="M14 29h28v12H14zm0-22h28v12H14z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 13v6h28V7H14zm0 0H6v22h8m0 0v6h28V29H14z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 13H6v22h8"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 29h28v12H14zm0-22h28v12H14z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAdjacentItem0)"></svg:path>`,
})
export class IconParkTwotoneAdjacentItemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
