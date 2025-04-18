import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCircleToSearchIcon],svg[arcticons-circle-to-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 23.96c-10.963 2.334-15.395 14.903-24.662 14.646S4.5 32.137 4.5 24.212S11.1 9.411 18.833 9.39c4.835-.012 8.135 1.763 11.444 5.192"></svg:path>`,
})
export class ArcticonsCircleToSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
