import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlexampIcon],svg[arcticons-plexamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24h18.944L12.808 9.342h4.075L27.519 24L16.883 38.658h4.074L31.594 24L20.957 9.342h4.075L35.668 24L25.032 38.658h4.075L39.743 24H43.5"></svg:path>`,
})
export class ArcticonsPlexampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
