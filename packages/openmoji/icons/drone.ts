import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDroneIcon],svg[openmoji-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M32.6 50.1c1 1.8 2.1 2.9 3.4 2.9c3.3 0 6-7.6 6-17c0-4.6-.6-8.8-1.7-11.8"></svg:path><svg:path fill="#D0CFCE" d="M40.3 24.2C39.2 21 37.7 19 36 19c-3.3 0-6 7.6-6 17c0 5.9 1 11 2.6 14.1"></svg:path><svg:circle cx="56" cy="56" r="10" fill="#FFF"></svg:circle><svg:circle cx="16" cy="56" r="10" fill="#FFF"></svg:circle><svg:circle cx="16" cy="16" r="10" fill="#FFF"></svg:circle><svg:circle cx="56" cy="16" r="10" fill="#FFF"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:ellipse cx="36" cy="36" rx="6" ry="17"></svg:ellipse><svg:circle cx="56" cy="56" r="10"></svg:circle><svg:path d="m42 42l6.9 6.9"></svg:path><svg:circle cx="16" cy="56" r="10"></svg:circle><svg:path d="m30 42l-6.9 6.9"></svg:path><svg:circle cx="16" cy="16" r="10"></svg:circle><svg:path d="m30 30l-6.9-6.9"></svg:path><svg:circle cx="56" cy="16" r="10"></svg:circle><svg:path d="m42 30l6.9-6.9m11.5 28.5l-8.8 8.8m-40-8.8l8.8 8.8m-8.8-40l8.8-8.8m40 8.8l-8.8-8.8"></svg:path></svg:g><svg:path fill="none" stroke="#9B9B9A" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2.1" d="m60.4 51.6l-8.8 8.8m-40-8.8l8.8 8.8m-8.8-40l8.8-8.8m40 8.8l-8.8-8.8"></svg:path>`,
})
export class OpenmojiDroneIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
