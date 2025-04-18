import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFlickrIcon],svg[ps-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 192q0 43-30 72.5T359 294t-73-29.5t-30-72.5t30-72.5T359 90t73 29.5t30 72.5M105 90q-43 0-73 29.5T2 192t30 72.5t73 29.5t73-29.5t30-72.5t-30-72.5T105 90"></svg:path>`,
})
export class PsFlickrIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
