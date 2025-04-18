import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMultiplyIcon],svg[openmoji-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M30 36L18 24l6-6l12 12l12-12l6 6l-12 12l12 12l-6 6l-12-12l-12 12l-6-6z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30 36L18 24l6-6l12 12l12-12l6 6l-12 12l12 12l-6 6l-12-12l-12 12l-6-6z"></svg:path>`,
})
export class OpenmojiMultiplyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
