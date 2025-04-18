import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMarusyaIcon],svg[arcticons-marusya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.543 39.085C10.63 35.869 8.871 33.009 8.871 24s1.758-11.87 4.672-15.085S20.81 4.5 24 4.5s7.543 1.2 10.457 4.415c2.914 3.216 4.672 6.076 4.672 15.085s-1.758 11.87-4.672 15.085S27.19 43.5 24 43.5s-7.543-1.2-10.457-4.415"></svg:path>`,
})
export class ArcticonsMarusyaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
