import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterSimpleDuotoneIcon],svg[si-align-horiz-center-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M20 13.4v-2.8A1.6 1.6 0 0 0 18.4 9H5.6A1.6 1.6 0 0 0 4 10.6v2.8A1.6 1.6 0 0 0 5.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v7m0 6v7m8-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 13.4v-2.8A1.6 1.6 0 0 1 5.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"></svg:path></svg:g>`,
})
export class SiAlignHorizCenterSimpleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
