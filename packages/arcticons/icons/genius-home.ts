import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeniusHomeIcon],svg[arcticons-genius-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.689 21.164a21.5 21.5 0 1 1 .059 6.086"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.31 21.168a18.789 18.789 0 1 1 .07 6.088"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.501 22.598h11.728v3.253H2.501zM13.091 11.9h5.612m-7.015 2.117h8.417m-8.885 2.118h9.352m-8.896 2.118h8.418M13.09 20.37h5.612"></svg:path>`,
})
export class ArcticonsGeniusHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
