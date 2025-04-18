import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlMediumIcon],svg[bxl-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.285 7.269a.73.73 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32l3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.45.45 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.424V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833L7.684 18.9v.319H2.036V18.9l1.992-2.417a.97.97 0 0 0 .257-.833z"></svg:path>`,
})
export class BxlMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
