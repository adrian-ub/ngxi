import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalcYouIcon],svg[arcticons-calc-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.178 16.528h8.342m6.635 16.77h8.342m-8.342-4.418h8.342m-7.912-16.016L35 20.22m-.036-7.415l-7.379 7.387m-10.909 6.706v8.342m-4.171-4.17h8.343m23.726-13.292c3.433 11.349-2.974 23.334-14.317 26.786c-11.344 3.451-23.34-2.935-26.81-14.273S6.342 6.947 17.674 3.458c11.332-3.49 23.35 2.856 26.858 14.182"></svg:path>`,
})
export class ArcticonsCalcYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
