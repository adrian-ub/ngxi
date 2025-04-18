import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBearSmileFillIcon],svg[ri-bear-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897A9 9 0 0 1 21 13a9 9 0 1 1-18 0c0-1.09.194-2.136.55-3.103a4.5 4.5 0 1 1 6.791-5.744a9 9 0 0 1 3.32 0A4.5 4.5 0 0 1 17.5 2M10 13H8a4 4 0 0 0 8 0h-2a2 2 0 1 1-4 0"></svg:path>`,
})
export class RiBearSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
