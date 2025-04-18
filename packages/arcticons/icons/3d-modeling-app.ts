import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3dModelingAppIcon],svg[arcticons-3d-modeling-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.072 15.916l5.301 19.786l14.72 8.498l14.35-8.285l5.485-20.47L23.758 3.8z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.072 15.916l19.861 11.467l19.995-11.938M23.935 27.382l.159 16.816"></svg:path>`,
})
export class Arcticons3dModelingAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
