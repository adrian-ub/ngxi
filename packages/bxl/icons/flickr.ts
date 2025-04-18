import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlFlickrIcon],svg[bxl-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 12a4.573 4.573 0 1 1-9.147 0a4.573 4.573 0 0 1 9.147 0m10.833 0a4.573 4.573 0 1 1-9.147 0a4.573 4.573 0 0 1 9.147 0"></svg:path>`,
})
export class BxlFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
