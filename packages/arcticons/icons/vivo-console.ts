import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVivoConsoleIcon],svg[arcticons-vivo-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M40.04 14.75v18.5L24 42.5L7.96 33.25v-18.5L24 5.5zm-32.08.086L24 23.901m0 .017l16.04-9.082M24 42.244V23.918"></svg:path><svg:path d="m24 39.59l-13.486-7.777V16.277"></svg:path><svg:path d="m23.998 34.263l-8.934-5.153V18.85"></svg:path></svg:g>`,
})
export class ArcticonsVivoConsoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
