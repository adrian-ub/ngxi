import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsStarOutlineIcon],svg[bitcoin-icons-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11.762 3.732a.25.25 0 0 1 .476 0l1.726 5.314a.25.25 0 0 0 .238.173h5.588a.25.25 0 0 1 .147.452l-4.52 3.285a.25.25 0 0 0-.091.28l1.726 5.313a.25.25 0 0 1-.384.28l-4.521-3.285a.25.25 0 0 0-.294 0l-4.52 3.285a.25.25 0 0 1-.385-.28l1.726-5.314a.25.25 0 0 0-.09-.28L4.063 9.672a.25.25 0 0 1 .147-.452h5.588a.25.25 0 0 0 .238-.173z"></svg:path>`,
})
export class BitcoinIconsStarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
