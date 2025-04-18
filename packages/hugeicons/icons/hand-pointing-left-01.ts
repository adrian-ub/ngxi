import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandPointingLeft01Icon],svg[hugeicons-hand-pointing-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.999 8.834h-.948a3 3 0 0 1-1.791-.595L14.357 4.58c-.566-.421-1.267-.758-1.915-.48c-1.049.451-1.73 1.723-.158 3.28l1.71 1.598H3.57c-2.044.056-2.145 3.345 0 3.486h5.94c-.192 1.48.852 8.454 5.272 7.437l.633-.143c.92-.206 2.557-.814 3.514-1.485c.997-.697 2.585-.451 3.07-.451" color="currentColor"></svg:path>`,
})
export class HugeiconsHandPointingLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
