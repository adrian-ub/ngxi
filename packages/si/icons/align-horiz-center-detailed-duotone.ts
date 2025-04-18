import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siAlignHorizCenterDetailedDuotoneIcon],svg[si-align-horiz-center-detailed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M16 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6H9.6A1.6 1.6 0 0 0 8 15.6v1.8A1.6 1.6 0 0 0 9.6 19h4.8a1.6 1.6 0 0 0 1.6-1.6m4-9V6.6A1.6 1.6 0 0 0 18.4 5H5.6A1.6 1.6 0 0 0 4 6.6v1.8A1.6 1.6 0 0 0 5.6 10h12.8A1.6 1.6 0 0 0 20 8.4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M12 2v3m0 5v4m0 5v3m4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 17.4v-1.8A1.6 1.6 0 0 1 9.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m4-9v1.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 8.4V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6"></svg:path></svg:g>`,
})
export class SiAlignHorizCenterDetailedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
