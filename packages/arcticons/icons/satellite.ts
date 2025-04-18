import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSatelliteIcon],svg[arcticons-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M26.736 22.723a3.2 3.2 0 1 1-4.224-1.625a3.2 3.2 0 0 1 4.224 1.625Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.282 4.5l7.812 13m7.812 13l7.812 13"></svg:path>`,
})
export class ArcticonsSatelliteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
