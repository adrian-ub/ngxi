import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoFlickrIcon],svg[fontisto-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.501 11.65a5.25 5.25 0 1 1-10.5 0a5.25 5.25 0 0 1 10.5 0m13.5 0a5.25 5.25 0 1 1-10.5 0a5.25 5.25 0 0 1 10.5 0"></svg:path>`,
})
export class FontistoFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
