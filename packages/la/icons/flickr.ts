import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFlickrIcon],svg[la-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5C6.355 5 5 6.355 5 8v16c0 1.645 1.355 3 3 3h16c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3zm0 2h16c.566 0 1 .434 1 1v16c0 .566-.434 1-1 1H8c-.566 0-1-.434-1-1V8c0-.566.434-1 1-1m3.5 5.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7m9 0a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7"></svg:path>`,
})
export class LaFlickrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
