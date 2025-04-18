import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesmailAltIcon],svg[arcticons-monoclesmail-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.497 10.73A1.997 1.997 0 0 0 4.5 12.727h0v22.576A1.997 1.997 0 0 0 6.497 37.3h35.006a1.997 1.997 0 0 0 1.997-1.997h0V12.697a1.997 1.997 0 0 0-1.997-1.996H6.497ZM43.5 12.697L24 26.067L4.5 12.727"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 26.043s1.87-1.467 3.016-.908c3.841 1.878 5.522 7.548 13.535 3.21c-5.47 9.952-14.18 5.712-16.552 2.228c-2.371 3.483-11.08 7.724-16.55-2.228c8.014 4.338 9.694-1.332 13.535-3.21c1.145-.559 3.015.908 3.015.908"></svg:path>`,
})
export class ArcticonsMonoclesmailAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
