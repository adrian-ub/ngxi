import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNicefeedIcon],svg[arcticons-nicefeed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11.371" cy="21.99" r="5.871" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="rotate(-.073 11.382 22.014)"></svg:circle><svg:circle cx="22.277" cy="11.371" r="5.871" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.387 11.37A26.016 26.016 0 0 1 11.37 37.387"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 11.37A31.13 31.13 0 0 1 11.371 42.5"></svg:path><svg:path fill="none" stroke="currentColor" d="M37.387 11.37H42.5M11.371 37.387V42.5"></svg:path>`,
})
export class ArcticonsNicefeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
