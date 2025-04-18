import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHeetchIcon],svg[arcticons-heetch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.34 34.725a3.887 3.887 0 0 1 0 7.775a3.887 3.887 0 0 1 0-7.775M8.775 23.982h27.317V5.5M8.775 42.147V5.5"></svg:path>`,
})
export class ArcticonsHeetchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
