import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMarinetrafficIcon],svg[arcticons-marinetraffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.274 5.87L5.71 17.905a2.94 2.94 0 0 0-1.067 3.285l6.327 19.47a2.94 2.94 0 0 0 2.793 2.031h20.472c1.273 0 2.4-.82 2.793-2.03l6.327-19.471a2.94 2.94 0 0 0-1.067-3.285L25.726 5.871a2.94 2.94 0 0 0-3.452 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.07 10.786A1.96 1.96 0 0 0 24 12.53v24.908c0 1.08.877 1.957 1.958 1.957h6.598c.848 0 1.599-.547 1.86-1.353l5.289-16.272a1.96 1.96 0 0 0-.711-2.19l-11.885-8.633a1.96 1.96 0 0 0-2.04-.16z"></svg:path>`,
})
export class ArcticonsMarinetrafficIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
