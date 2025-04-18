import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCheveronOutlineLeftIcon],svg[zondicons-cheveron-outline-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m8-10a8 8 0 1 0-16 0a8 8 0 0 0 16 0M7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24L6.76 10z"></svg:path>`,
})
export class ZondiconsCheveronOutlineLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
