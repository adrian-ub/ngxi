import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMinusIcon],svg[openmoji-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M59 41H13V31h46"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M13 31h46v10H13z"></svg:path>`,
})
export class OpenmojiMinusIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
