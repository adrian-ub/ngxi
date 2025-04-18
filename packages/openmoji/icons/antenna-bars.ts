import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAntennaBarsIcon],svg[openmoji-antenna-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiAntennaBars0" d="M12 51h5v9h-5zm10.75-10h5v19h-5zM33.5 31h5v28.999h-5zm10.75-10h5v38.999h-5zM55 12h5v48h-5z"></svg:path></svg:defs><svg:use href="#openmojiAntennaBars0" fill="#d0cfce" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:use href="#openmojiAntennaBars0" fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use>`,
})
export class OpenmojiAntennaBarsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
