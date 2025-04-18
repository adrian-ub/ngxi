import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaFlashOffOutlineIcon],svg[eva-flash-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.71 19.29l-16-16a1 1 0 0 0-1.42 1.42l16 16a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42m-8.17-1.23l.27-2.42L10 12.8H6.87l1.24-1.86L6.67 9.5l-2.5 3.74A1 1 0 0 0 5 14.8h5.89l-.77 7.09a1 1 0 0 0 .65 1.05a1 1 0 0 0 .34.06a1 1 0 0 0 .83-.44l3.12-4.67l-1.44-1.44ZM11.46 5.94l-.27 2.42L14 11.2h3.1l-1.24 1.86l1.44 1.44l2.5-3.74A1 1 0 0 0 19 9.2h-5.89l.77-7.09a1 1 0 0 0-.65-1a1 1 0 0 0-1.17.38L8.94 6.11l1.44 1.44Z"></svg:path>`,
})
export class EvaFlashOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
