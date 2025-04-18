import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gisPinIcon],svg[gis-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50 0a18.955 18.955 0 0 0-18.955 18.957A18.955 18.955 0 0 0 47.5 37.747V97.5A2.5 2.5 0 0 0 50 100a2.5 2.5 0 0 0 2.5-2.5V37.746a18.955 18.955 0 0 0 16.455-18.789A18.955 18.955 0 0 0 50 0m-4.832 8.549a5.947 5.947 0 0 1 5.947 5.947a5.947 5.947 0 0 1-5.947 5.947a5.947 5.947 0 0 1-5.947-5.947a5.947 5.947 0 0 1 5.947-5.947" color="currentColor"></svg:path>`,
})
export class GisPinIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
