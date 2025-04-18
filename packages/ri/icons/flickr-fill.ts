import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlickrFillIcon],svg[ri-flickr-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0m12 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path>`,
})
export class RiFlickrFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
