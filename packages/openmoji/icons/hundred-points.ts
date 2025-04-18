import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHundredPointsIcon],svg[openmoji-hundred-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiHundredPoints0" d="M59.183 46.059h-46m46 8h-46m19.8-17.054a6.28 6.28 0 0 1-6.279-6.28V20.339a6.28 6.28 0 0 1 6.28-6.279a6.28 6.28 0 0 1 6.278 6.28v10.387a6.28 6.28 0 0 1-6.279 6.279m19.927-.001a6.28 6.28 0 0 1-6.28-6.28V20.339a6.28 6.28 0 0 1 6.28-6.279a6.28 6.28 0 0 1 6.278 6.28v10.387a6.28 6.28 0 0 1-6.279 6.279M12.984 18.885l6.353-4.759v22.946"></svg:path></svg:defs><svg:use href="#openmojiHundredPoints0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"></svg:use><svg:use href="#openmojiHundredPoints0" fill="none" stroke="#D22F27" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4.1"></svg:use>`,
})
export class OpenmojiHundredPointsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
