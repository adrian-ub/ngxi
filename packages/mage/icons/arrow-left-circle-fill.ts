import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftCircleFillIcon],svg[mage-arrow-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75M17.54 13h-9l3.51 3.57a1 1 0 0 1 0 1.41a1 1 0 0 1-1.41 0l-4.53-4.52a2.2 2.2 0 0 1-.45-.67a2 2 0 0 1 0-1.58a2.1 2.1 0 0 1 .45-.67l4.53-4.53a1 1 0 1 1 1.41 1.42L8.48 11h9.1a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageArrowLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
