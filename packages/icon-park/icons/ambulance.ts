import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAmbulanceIcon],svg[icon-park-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 35H6C4.89543 35 4 34.1046 4 33V11C4 9.89543 4.89543 9 6 9H31C32.1046 9 33 9.89543 33 11V17.8987C33 19.1602 33.7892 20.287 34.9748 20.7181L42.0252 23.2819C43.2108 23.713 44 24.8398 44 26.1013V33C44 34.1046 43.1046 35 42 35H38"></svg:path><svg:path stroke-linejoin="round" d="M18 35H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 19L20 19"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 15V23"></svg:path><svg:circle cx="14" cy="35" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="35" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkAmbulanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
