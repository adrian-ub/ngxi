import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareMoreIcon],svg[circum-square-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.437 20.938H5.562a2.5 2.5 0 0 1-2.5-2.5V5.565a2.5 2.5 0 0 1 2.5-2.5h12.875a2.5 2.5 0 0 1 2.5 2.5v12.873a2.5 2.5 0 0 1-2.5 2.5M5.562 4.065a1.5 1.5 0 0 0-1.5 1.5v12.873a1.5 1.5 0 0 0 1.5 1.5h12.875a1.5 1.5 0 0 0 1.5-1.5V5.565a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:circle cx="11.999" cy="12.002" r="1" fill="currentColor"></svg:circle><svg:circle cx="15.999" cy="12.002" r="1" fill="currentColor"></svg:circle><svg:circle cx="7.999" cy="12.002" r="1" fill="currentColor"></svg:circle>`,
})
export class CircumSquareMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
