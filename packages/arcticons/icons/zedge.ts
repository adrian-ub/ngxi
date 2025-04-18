import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZedgeIcon],svg[arcticons-zedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.919 33.4l-13.949-.094l5.08-19.05h13.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.998 14.256c4.426 0 7.02 4.472 5.793 9.755S30.345 33.4 25.919 33.4M4.9 23.318h9.733"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsZedgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
