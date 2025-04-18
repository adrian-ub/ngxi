import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRamHealthIcon],svg[arcticons-ram-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 21.352v11.15m-5.575-5.575h11.15M28.1 34.844h6.635c4.617 0 2.58-3.555 1.714-5.092L23.992 7.647L11.535 29.752c-.865 1.537-2.903 5.092 1.714 5.092h6.635M45.5 24c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24"></svg:path>`,
})
export class ArcticonsRamHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
