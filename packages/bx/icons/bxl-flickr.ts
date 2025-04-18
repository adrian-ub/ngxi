import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlFlickrIcon],svg[bx-bxl-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.157 12a4.573 4.573 0 1 1-9.147 0a4.573 4.573 0 0 1 9.147 0zm10.833 0a4.573 4.573 0 1 1-9.147 0a4.573 4.573 0 0 1 9.147 0z" fill="currentColor"></svg:path>`,
})
export class BxBxlFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
