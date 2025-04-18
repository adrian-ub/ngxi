import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArrowCircleLeftOutlineIcon],svg[eva-arrow-circle-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h-5.66l1.25-1.31a1 1 0 0 0-1.45-1.38l-2.86 3a1 1 0 0 0-.09.13a.7.7 0 0 0-.11.19a.9.9 0 0 0-.06.28S7 12 7 12a1 1 0 0 0 .08.38a1 1 0 0 0 .21.32l3 3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L10.41 13H16a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class EvaArrowCircleLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
