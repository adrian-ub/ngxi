import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJmoIcon],svg[arcticons-jmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.17 17.248c12.662 11.423-4.982 22.835-20.345 20.345C30.868 35.102 39.38 24.93 39.169 17.248m-13.282-4.771c2.7 11.213-5.402 20.135-13.493 22.625C-4 28.25 7.413 10.408 25.887 12.477"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.428 8.747c-.2 15.353-5.39 26.565-27.595 30.506C29.617 31.57 31.277 20.569 31.698 8.747z"></svg:path>`,
})
export class ArcticonsJmoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
