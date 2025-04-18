import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDownArrowIcon],svg[openmoji-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="M52.498 49.249L36 67.036L19.502 49.249l4.076-3.789l9.641 10.395V5.036h5.562v50.819l9.641-10.395z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M52.498 49.249L36 67.036L19.502 49.249l4.076-3.789l9.641 10.395V5.036h5.562v50.819l9.641-10.395z"></svg:path>`,
})
export class OpenmojiDownArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
