import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArrowOutlineRightIcon],svg[zondicons-arrow-outline-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10a10 10 0 1 1-20 0a10 10 0 0 1 20 0m-2 0a8 8 0 1 0-16 0a8 8 0 0 0 16 0m-8 2H5V8h5V5l5 5l-5 5z"></svg:path>`,
})
export class ZondiconsArrowOutlineRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
