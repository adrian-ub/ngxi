import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlickrLineIcon],svg[ri-flickr-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17A5 5 0 1 0 6 7a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m9 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10m3-5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class RiFlickrLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
