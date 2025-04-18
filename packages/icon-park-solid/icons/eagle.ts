import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEagleIcon],svg[icon-park-solid-eagle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSEagle0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 23c-4.04-7.043 3.624-11.136 8-12c14.541-12.844 26.485-.287 28 8c1.514 8.287 1.158 14.893 2 18c-6.463-8.7-10.877-7.158-12-5c-2.02 4.144-5.314 4.252-7 3c-4.04-3.314-10.476 3.202-13 7c4.847-8.7 5.505-14.273 5-16c-2.02-8.286-8.307-5.416-11-3"></svg:path><svg:circle cx="23" cy="16" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSEagle0)"></svg:path>`,
})
export class IconParkSolidEagleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
