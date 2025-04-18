import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMoreSquareHorizFillIcon],svg[si-more-square-horiz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.533 14A1.533 1.533 0 0 1 10 12.467v-.934c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533zm7 0A1.533 1.533 0 0 1 17 12.467v-.934c0-.846.686-1.533 1.533-1.533h.934c.847 0 1.533.687 1.533 1.533v.934c0 .846-.686 1.533-1.533 1.533zm-14 0A1.533 1.533 0 0 1 3 12.467v-.934C3 10.687 3.687 10 4.533 10h.934C6.314 10 7 10.687 7 11.533v.934C7 13.313 6.314 14 5.467 14z" clip-rule="evenodd"></svg:path>`,
})
export class SiMoreSquareHorizFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
