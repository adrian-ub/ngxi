import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSecuridIcon],svg[arcticons-securid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.817" cy="27.952" r="7.683" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.44 20.45a8.723 8.723 0 0 0-16.68-2.882a6.66 6.66 0 0 0-2.998-.734a6.73 6.73 0 0 0-6.586 5.341a6.73 6.73 0 0 0 .058 13.461h24.583"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.109 23.567l-6.929 6.928l-2.933-2.934"></svg:path>`,
})
export class ArcticonsSecuridIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
