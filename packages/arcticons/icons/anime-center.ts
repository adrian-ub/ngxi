import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnimeCenterIcon],svg[arcticons-anime-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.62 34.75v-21.5L24 2.5L5.38 13.25v21.5L24 45.5zm-4.331-19L24 7.5m0 33l14.289-8.25M9.711 15.75v16.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.678 17.203A8.254 8.254 0 0 0 16.136 21.5m-.016 4.953a8.25 8.25 0 1 0 14.676-7.13"></svg:path><svg:circle cx="15.75" cy="24" r="2.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.75" cy="18.25" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAnimeCenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
