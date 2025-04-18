import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCheckMarkIcon],svg[openmoji-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b1cc33" d="m61.5 23.3l-8.013-8.013l-25.71 25.71l-9.26-9.26l-8.013 8.013l17.42 17.44z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M10.5 39.76L27.92 57.2L61.5 23.31l-8.013-8.013l-25.71 25.71l-9.26-9.26z"></svg:path>`,
})
export class OpenmojiCheckMarkIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
