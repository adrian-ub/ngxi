import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsParistransporttrafficIcon],svg[arcticons-paristransporttraffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.426" cy="29.948" r="2.471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.574" cy="29.948" r="2.471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.843 9.877v22.618a5.39 5.39 0 0 0 5.376 5.377h19.562a5.39 5.39 0 0 0 5.376-5.377V9.877A5.39 5.39 0 0 0 33.781 4.5H14.219a5.39 5.39 0 0 0-5.376 5.377"></svg:path><svg:rect width="9.371" height="11.714" x="12.872" y="9.531" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".895"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.219 37.924L6.758 43.5m27.023-5.576l7.461 5.576"></svg:path><svg:rect width="9.371" height="11.714" x="25.757" y="9.531" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".895"></svg:rect>`,
})
export class ArcticonsParistransporttrafficIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
