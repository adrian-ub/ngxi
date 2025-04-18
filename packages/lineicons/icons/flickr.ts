import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlickrIcon],svg[lineicons-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.645 12A4.323 4.323 0 1 1 2 12a4.323 4.323 0 0 1 8.645 0M22 12a4.323 4.323 0 1 1-8.645 0A4.323 4.323 0 0 1 22 12"></svg:path>`,
})
export class LineiconsFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
