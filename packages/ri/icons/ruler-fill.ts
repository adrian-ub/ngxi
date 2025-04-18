import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRulerFillIcon],svg[ri-ruler-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.929 13.314l2.121 2.121l1.415-1.414L6.343 11.9l2.122-2.122l2.828 2.829l1.414-1.414L9.88 8.364L12 6.243l2.121 2.121l1.415-1.414l-2.122-2.121L16.243 2a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 0 1.414l-14.85 14.85a1 1 0 0 1-1.414 0l-4.95-4.95a1 1 0 0 1 0-1.415z"></svg:path>`,
})
export class RiRulerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
