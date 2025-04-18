import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSchoolLineDuotoneIcon],svg[solar-map-point-school-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path d="M11.224 6.636a2.28 2.28 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.28 2.28 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016z"></svg:path><svg:path stroke-linecap="round" d="M14.5 9v2.7a.92.92 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.92.92 0 0 1-.59-.879V9"></svg:path></svg:g>`,
})
export class SolarMapPointSchoolLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
