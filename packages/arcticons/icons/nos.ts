import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNosIcon],svg[arcticons-nos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.51 19a5 5 0 1 0 5 5a5 5 0 0 0-5-5M9 28.82v-9.6l7.39 9.6v-9.6m15.92 8.69A2.76 2.76 0 0 0 34.74 29h1.78A2.48 2.48 0 0 0 39 26.51h0A2.48 2.48 0 0 0 36.52 24h-1.93a2.48 2.48 0 0 1-2.48-2.48h0a2.48 2.48 0 0 1 2.48-2.48h1.78a2.76 2.76 0 0 1 2.43 1.09"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.51 21.51 0 0 0 2.5 24h0A21.51 21.51 0 0 0 24 45.5h0a21.5 21.5 0 0 0 0-43"></svg:path>`,
})
export class ArcticonsNosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
