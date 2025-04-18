import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsZoomInIcon],svg[bxs-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8m4 9h-3v3H9v-3H6V9h3V6h2v3h3z"></svg:path>`,
})
export class BxsZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
