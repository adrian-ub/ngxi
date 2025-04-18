import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVrOffshoreIcon],svg[arcticons-vr-offshore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.834 4.62c-2.569 1.209-8.487 7.101-10.325 10.652S17.16 21.92 17.16 21.92a9.5 9.5 0 0 0 2.795 2.493a13 13 0 0 0 3.4 1.133s4.004-5.44 4.532-7.026s3.098-8.536 2.947-13.9"></svg:path><svg:circle cx="18.973" cy="25.903" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.299" cy="29.479" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21.416" cy="31.575" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24.488" cy="33.59" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27.459" cy="35.655" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.517" cy="39.142" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.625" cy="42.63" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsVrOffshoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
