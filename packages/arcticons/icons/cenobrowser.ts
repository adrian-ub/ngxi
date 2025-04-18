import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCenobrowserIcon],svg[arcticons-cenobrowser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.62 28.997c-2.04 5.54-7.37 9.5-13.62 9.5c-8.01 0-14.5-6.49-14.5-14.5s6.49-14.5 14.5-14.5c6.25 0 11.58 3.96 13.62 9.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.91 18.997H25.62v10h19.29M45.5 24H25.621"></svg:path>`,
})
export class ArcticonsCenobrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
