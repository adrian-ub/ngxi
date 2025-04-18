import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnethingCloudIcon],svg[arcticons-onething-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.443 20.636A13 13 0 1 1 24 37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.852 22.05A7.5 7.5 0 0 1 36 37H12a7.5 7.5 0 1 1 5.304-12.803"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.061 20.465l2.475 2.475a1.497 1.497 0 0 1 0 2.12l-2.475 2.476a1.497 1.497 0 0 1-2.121 0l-2.475-2.475a1.497 1.497 0 0 1 0-2.121l2.475-2.475a1.497 1.497 0 0 1 2.121 0"></svg:path>`,
})
export class ArcticonsOnethingCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
