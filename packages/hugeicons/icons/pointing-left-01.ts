import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPointingLeft01Icon],svg[hugeicons-pointing-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.017 4.5H8.01m-5.992 0c0-.7 1.992-2.008 2.497-2.5M2.017 4.5c0 .699 1.992 2.007 2.497 2.498M22 10.827h-.949a3 3 0 0 1-1.792-.596l-4.902-3.66c-.566-.422-1.267-.76-1.915-.48c-1.049.45-1.73 1.723-.158 3.281l1.71 1.599H3.57c-2.044.056-2.145 3.346 0 3.487h5.94c-.192 1.48.852 8.458 5.272 7.44l.633-.143c.92-.206 2.557-.814 3.514-1.485c.997-.698 1.99-.452 3.07-.452" color="currentColor"></svg:path>`,
})
export class HugeiconsPointingLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
