import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAndroidIcon],svg[icon-park-solid-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAndroid0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M43.901 36H4.1C5.103 25.893 13.63 18 24 18c10.372 0 18.899 7.893 19.902 18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 20l-4-7m23 7l4-7"></svg:path><svg:circle cx="15" cy="29" r="2" fill="#000"></svg:circle><svg:circle cx="33" cy="29" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAndroid0)"></svg:path>`,
})
export class IconParkSolidAndroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
