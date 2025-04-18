import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIngressIcon],svg[arcticons-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.978 14.75v18.5L24 42.5l16.021-9.25v-18.5L24 5.5zM24 5.5v8.022m-8.978 15.889L7.978 33.25m24.999-3.839l7.044 3.839"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 37.269L35.668 17.06H12.332zM12.332 17.06L24 23.796m11.668-6.736L24 23.796m0 13.473V23.796"></svg:path>`,
})
export class ArcticonsIngressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
