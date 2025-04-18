import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsColizeumIcon],svg[arcticons-colizeum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.987 2.5A21.5 21.5 0 0 0 3.69 17h40.62A21.5 21.5 0 0 0 23.988 2.5M3.69 31a21.5 21.5 0 0 0 20.297 14.5A21.5 21.5 0 0 0 44.284 31H26.487l-2.5-4l-2.5 4z"></svg:path><svg:circle cx="33.486" cy="24" r="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.305 27.182l6.364-6.364m0 6.364l-6.364-6.364"></svg:path>`,
})
export class ArcticonsColizeumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
