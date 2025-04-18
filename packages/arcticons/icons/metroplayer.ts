import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMetroplayerIcon],svg[arcticons-metroplayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8.16" cy="38.57" r="3.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.85 5.78a3.64 3.64 0 0 0-3.2 1.91h0L24 30.91L11.37 7.69a3.66 3.66 0 0 0-6.43 3.5L20.79 40.3a3.63 3.63 0 0 0 6.41 0h0l9-16.49v14.76a3.66 3.66 0 0 0 7.31 0h0V9.43a3.65 3.65 0 0 0-3.66-3.65"></svg:path>`,
})
export class ArcticonsMetroplayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
