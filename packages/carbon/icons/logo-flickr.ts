import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoFlickrIcon],svg[carbon-logo-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="16" r="6" fill="currentColor"></svg:circle><svg:circle cx="24" cy="16" r="6" fill="currentColor"></svg:circle>`,
})
export class CarbonLogoFlickrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
