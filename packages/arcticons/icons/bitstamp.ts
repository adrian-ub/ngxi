import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitstampIcon],svg[arcticons-bitstamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.467 21.32a8.41 8.41 0 0 1 0 16.818H14.59V4.5h13.876a8.41 8.41 0 0 1 0 16.82m.001-.001H14.591m0-16.819h-3.467m3.467 16.819h-3.467m3.467 16.819h-3.467m0 5.362h25.752"></svg:path>`,
})
export class ArcticonsBitstampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
