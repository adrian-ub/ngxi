import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTextnowIcon],svg[arcticons-textnow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.511 20.378h8.635c0-3.206 2.623-5.83 5.83-5.83h8.049c3.206 0 5.829 2.624 5.829 5.83H42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.593 7.47H18.407C11.308 7.47 5.5 13.28 5.5 20.379c0 5.929 4.057 10.943 9.528 12.44l.381 7.711l8.318-7.244h5.866c7.099 0 12.907-5.808 12.907-12.907S36.692 7.47 29.593 7.47"></svg:path>`,
})
export class ArcticonsTextnowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
