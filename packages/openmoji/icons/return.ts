import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiReturnIcon],svg[openmoji-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m46.196 16.205l-19.392 19.46l19.392 19.46"></svg:path>`,
})
export class OpenmojiReturnIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
