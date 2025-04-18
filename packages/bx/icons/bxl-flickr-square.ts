import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlFlickrSquareIcon],svg[bx-bxl-flickr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.747 14.746A2.745 2.745 0 1 1 11.494 12a2.744 2.744 0 0 1-2.747 2.746zm6.506 0a2.746 2.746 0 1 1-.001-5.493a2.746 2.746 0 0 1 .001 5.493z" fill="currentColor"></svg:path>`,
})
export class BxBxlFlickrSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
