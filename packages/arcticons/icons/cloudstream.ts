import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCloudstreamIcon],svg[arcticons-cloudstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.144 21.25v8.036l5.713-4.018Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.165 27.828H41.95c.687-2.529-1.202-3.652-2.858-3.652H37.49s.074-6.6-7.775-6.6c-1.222-2.062-3.548-3.408-6.935-3.408c-6.38 0-7.497 6.34-7.497 6.34a6.444 6.444 0 0 0-7.942 8.893H5.296a2.172 2.172 0 0 0 0 4.344l.05-.005l35.794.092a1.226 1.226 0 0 0 1.222-1.238l-.003-1.344h.806a1.711 1.711 0 1 0 0-3.422"></svg:path>`,
})
export class ArcticonsCloudstreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
