import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFlickrIcon],svg[zmdi-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M97 289q-40 0-68.5-28.5T0 192.5T28.5 125T97 97t68 28t28 67.5t-28 68T97 289m233 0q-40 0-68.5-28.5t-28.5-68t28.5-67.5T330 97t68.5 28t28.5 67.5t-28.5 68T330 289"></svg:path>`,
})
export class ZmdiFlickrIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
