import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiHomeIcon],svg[arcticons-mi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.964 29.122a17.4 17.4 0 0 1-.242-2.9V4.5L24 10.94L41.278 4.5v9.444m0 5.96v6.318A17.28 17.28 0 0 1 24 43.5h0A17.28 17.28 0 0 1 8.215 33.258"></svg:path>`,
})
export class ArcticonsMiHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
