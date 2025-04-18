import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFavoriteHalfIcon],svg[carbon-favorite-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.21 17.062L16 29l11.79-11.939a7.73 7.73 0 0 0 0-10.823a7.494 7.494 0 0 0-10.684 0L16 7.364l-1.106-1.126a7.494 7.494 0 0 0-10.684 0a7.73 7.73 0 0 0 0 10.824m22.145-1.417L16 26.125V10.23q1.27-1.288 2.541-2.574a5.477 5.477 0 0 1 7.814 0a5.71 5.71 0 0 1 0 7.989"></svg:path>`,
})
export class CarbonFavoriteHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
