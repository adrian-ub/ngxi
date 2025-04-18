import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyaisIcon],svg[arcticons-myais-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 17.13c13.96 7.512 22.038 3.226 30.644 0c5.408-2.453 7.618-1.918 10.356-1.852c-4.225 2.552-9.454 5.84-11.678 7.885c-1.207 1.11-2.784 1.744-3.8 2.145C18.033 29.64 8.366 21.728 3.5 17.129Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.012 27.036c-5.351 2.096-13.245 4.397-22.215-2.909c7.66 13.021 18.777 9.169 22.215 2.91"></svg:path>`,
})
export class ArcticonsMyaisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
