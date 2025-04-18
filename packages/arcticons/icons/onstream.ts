import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnstreamIcon],svg[arcticons-onstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.243 14.887a17.304 17.304 0 0 1-22.247 25.47M9.294 35.46A17.304 17.304 0 0 1 25.011 7.739"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.757 3.8L12.262 24.567l9.585 2.6L5.827 42.8l27.389-17.213l-11.675-3.263l21.54-15.278z"></svg:path>`,
})
export class ArcticonsOnstreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
