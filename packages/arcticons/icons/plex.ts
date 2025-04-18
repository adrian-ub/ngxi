import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlexIcon],svg[arcticons-plex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.22 4.5h12.13s9.31 15.12 11 18a3.19 3.19 0 0 1 0 3l-11 18H12.43S22 28.06 23.05 26.38a3.73 3.73 0 0 0 0-4.55C21.62 19.53 12.22 4.5 12.22 4.5"></svg:path>`,
})
export class ArcticonsPlexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
