import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPvrIcon],svg[arcticons-pvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 34.329V13.67h3.699c3.823 0 6.922 3.106 6.922 6.938s-3.099 6.938-6.922 6.938H5m27.379 6.783V13.67h3.698c3.824 0 6.923 3.106 6.923 6.938s-3.1 6.938-6.923 6.938H32.38m3.697.001l6.763 6.777M29.818 10.8l-6.602 26.4l-6.598-26.4"></svg:path>`,
})
export class ArcticonsPvrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
