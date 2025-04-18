import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riInkBottleLineIcon],svg[ri-ink-bottle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8.997l4.371 1.748a1 1 0 0 1 .629.929v9.323a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.323a1 1 0 0 1 .629-.929L8 8.997zm-.385 2h-7.23L5 12.35v7.646h14v-1H8v-5h11V12.35zm.385-8a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1zm-1 2H9v1h6z"></svg:path>`,
})
export class RiInkBottleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
