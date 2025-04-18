import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAndroidIcon],svg[icon-park-outline-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M43.901 36H4.1C5.103 25.893 13.63 18 24 18c10.372 0 18.899 7.893 19.902 18Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 20l-4-7m23 7l4-7"></svg:path><svg:circle cx="15" cy="29" r="2" fill="currentColor"></svg:circle><svg:circle cx="33" cy="29" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
