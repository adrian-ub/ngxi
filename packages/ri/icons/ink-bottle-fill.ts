import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInkBottleFillIcon],svg[ri-ink-bottle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8.997l4.371 1.748a1 1 0 0 1 .629.929v9.323a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323a1 1 0 0 1 .629-.929L8 8.997zm4 5H8v5h12zm-4-11a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiInkBottleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
