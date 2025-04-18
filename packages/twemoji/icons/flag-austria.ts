import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagAustriaIcon],svg[twemoji-flag-austria-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EEE" d="M0 13h36v10H0z"></svg:path><svg:path fill="#ED2939" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4M4 31h28a4 4 0 0 0 4-4v-4H0v4a4 4 0 0 0 4 4"></svg:path>`,
})
export class TwemojiFlagAustriaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
