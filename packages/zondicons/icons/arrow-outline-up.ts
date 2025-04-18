import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArrowOutlineUpIcon],svg[zondicons-arrow-outline-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a10 10 0 1 1 0 20a10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m2 8v5H8v-5H5l5-5l5 5z"></svg:path>`,
})
export class ZondiconsArrowOutlineUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
