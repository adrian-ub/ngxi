import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAkuhPakistanIcon],svg[arcticons-akuh-pakistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.05 39.312a11.306 11.306 0 1 1-1.303-19.597"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.949 39.297a9.775 9.775 0 0 1-8.71-9.232a9.875 9.875 0 0 1 7.481-10.318"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.574 19.74a11.57 11.57 0 0 1 6.653 13.035a11.004 11.004 0 0 1-11.498 8.58a11.63 11.63 0 0 1-10.735-9.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.617 19.833a9.66 9.66 0 0 1-2.846 12.308a9.9 9.9 0 0 1-12.734-.771"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.992 18.492a11.594 11.594 0 0 1 8.972-11.577a11.07 11.07 0 0 1 12.802 6.55a11.48 11.48 0 0 1-4.429 13.903"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.058 18.412a9.875 9.875 0 0 1 12.436-2.784a9.71 9.71 0 0 1 4.83 11.7"></svg:path>`,
})
export class ArcticonsAkuhPakistanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
