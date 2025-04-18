import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCampgroundIcon],svg[fa6-solid-campground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377 52c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-39 48.8L249 12c-11-13.8-31.2-16-45-5s-16 31.2-5 45l48 60L12.3 405.4c-8 10-12.3 22.3-12.3 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-23.6c0-12.7-4.3-25.1-12.3-35L329 112zm-89 396H168.5L288 291.7L407.5 448z"></svg:path>`,
})
export class Fa6SolidCampgroundIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
