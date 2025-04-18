import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAndroidIcon],svg[icon-park-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M43.9011 36H4.09863C5.10208 25.8934 13.6292 18 23.9999 18C34.3706 18 42.8977 25.8934 43.9011 36Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 20L10 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 20L37 13"></svg:path><svg:circle cx="15" cy="29" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="29" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
