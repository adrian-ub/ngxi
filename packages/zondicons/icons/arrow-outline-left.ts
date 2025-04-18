import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsArrowOutlineLeftIcon],svg[zondicons-arrow-outline-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10a10 10 0 1 1 20 0a10 10 0 0 1-20 0m2 0a8 8 0 1 0 16 0a8 8 0 0 0-16 0m8-2h5v4h-5v3l-5-5l5-5z"></svg:path>`,
})
export class ZondiconsArrowOutlineLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
