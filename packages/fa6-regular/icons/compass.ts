import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6RegularCompassIcon],svg[fa6-regular-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 256a208 208 0 1 0-416 0a208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0a256 256 0 1 1-512 0m306.7 69.1l-144.3 55.5c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31l-55.5 144.3c-3.2 8.5-9.9 15.1-18.4 18.4M288 256a32 32 0 1 0-64 0a32 32 0 1 0 64 0"></svg:path>`,
})
export class Fa6RegularCompassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
