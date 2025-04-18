import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsCircleIcon],svg[mage-dots-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M12 7.736a.673.673 0 1 0 0-1.346a.673.673 0 0 0 0 1.346m0 4.937a.673.673 0 1 0 0-1.346a.673.673 0 0 0 0 1.346m0 4.937a.673.673 0 1 0 0-1.346a.673.673 0 0 0 0 1.346"></svg:path></svg:g>`,
})
export class MageDotsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
