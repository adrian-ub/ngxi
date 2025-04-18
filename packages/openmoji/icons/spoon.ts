import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpoonIcon],svg[openmoji-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D0CFCE" d="M43.457 21.323c0-5.058-2.61-9.159-5.832-9.159s-5.832 4.1-5.832 9.159c0 4.698 1.355 8.566 4.257 9.094l-.811 28.412a2 2 0 1 0 4 0L39.21 30.41c2.897-.535 4.247-4.396 4.247-9.088"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M43.457 21.323c0-5.058-2.61-9.159-5.832-9.159s-5.832 4.1-5.832 9.159c0 4.698 1.355 8.566 4.257 9.094h0l-.811 28.412a2 2 0 1 0 4 0L39.21 30.41h0c2.897-.535 4.247-4.396 4.247-9.088"></svg:path>`,
})
export class OpenmojiSpoonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
