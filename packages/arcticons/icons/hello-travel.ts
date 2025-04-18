import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHelloTravelIcon],svg[arcticons-hello-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.585 5.491L12.957 42.51m-.35-37.019L8.979 42.51m-.35-37.019L5 42.51M43 5.49l-3.628 37.019M39.019 5.49L35.39 42.509M35.04 5.49l-3.627 37.019M35.04 5.49C33.629 30.287 6.731 8.672 5 42.508"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.019 5.49c-1.877 28.983-28.871 7.008-30.04 37.018"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.998 5.49c-2.465 33.718-29.124 11.997-30.04 37.018"></svg:path>`,
})
export class ArcticonsHelloTravelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
