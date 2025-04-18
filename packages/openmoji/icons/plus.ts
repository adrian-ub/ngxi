import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPlusIcon],svg[openmoji-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M31 31V13h10v18h18v10H41v18H31V41H13V31z"></svg:path>`,
})
export class OpenmojiPlusIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
