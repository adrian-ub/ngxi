import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFlipkartIcon],svg[arcticons-flipkart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.652 42.514H8.756A3.25 3.25 0 0 1 5.5 39.258V11.285m3.256-5.77h30.488m3.256 5.57v28.173a3.25 3.25 0 0 1-3.256 3.256h-8.993"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.652 42.514l1.505-5.782s-14.75-.97-16.289-.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.442 32.176l12.893-.767s.42-7.945 6.038-10.382c6.013-2.608 8.555-.707 8.699 1.367a2.55 2.55 0 0 1-.861 2.15c-1.443 1.168-3.968.175-5.156 1.444s-1.52 2.144-1.752 5.522l2.842.02s1.326.11 1.388 1.254s-.722 3.879-2.236 3.858s-2.976-.094-2.976-.094s-.613 4.377-1.07 5.966"></svg:path><svg:path fill="none" stroke="currentColor" d="M5.67 11.131h36.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.285L9.203 7.45L8.43 5.486m2.334 28.449l4.714.174m16.917-21.062c0 4.637-3.759 7.04-8.395 7.04s-8.394-2.403-8.394-7.04M42.5 11.086l-3.645-3.637l.774-1.963"></svg:path><svg:path fill="none" stroke="currentColor" d="m9.203 7.449l.162 3.386m29.49-3.386l-.161 3.386"></svg:path>`,
})
export class ArcticonsFlipkartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
