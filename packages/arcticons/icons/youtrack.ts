import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoutrackIcon],svg[arcticons-youtrack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.562 17.679l3.686-1.059a.145.145 0 0 1 .181.108l3.068 13.635a.146.146 0 0 1-.125.177c-.647.082-3.216.447-6.81 1.501m-21.45-19.604l6.291-5.242a7.32 7.32 0 0 1 9.183-.15a7.28 7.28 0 0 1 2.796 5.297m-5.838 23.22c-5.818 2.94-9.57 6.337-10.173 6.9a.14.14 0 0 1-.184.008l-9.932-7.345a.145.145 0 0 1-.044-.179l4.415-9.091l-5.092-6.08a.145.145 0 0 1 .018-.204l6.885-5.738"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.437 12.437h23.125v23.125H12.437zm11.421 3.947h5.445m-2.722 8.482v-8.482"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.496 16.384l-2.723 4.241l-2.722-4.241m2.722 8.482v-4.241m-1.59 11.054h5.137"></svg:path>`,
})
export class ArcticonsYoutrackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
