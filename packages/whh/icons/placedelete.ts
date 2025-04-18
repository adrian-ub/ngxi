import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlacedeleteIcon],svg[whh-placedelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m657 679l-272 345l-272-345q-73-76-99.5-178.5t0-205T113 116q56-57 127.5-86.5T385 0t144.5 29.5T657 116q73 77 99.5 179.5t0 205T657 679M385.5 129Q279 129 204 204t-75 181t75 180.5T385.5 640T567 565.5T642 385t-75-181t-181.5-75M514 448H258q-27 0-45.5-19T194 383.5t18.5-45T258 320h256q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhPlacedeleteIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
