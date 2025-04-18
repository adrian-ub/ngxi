import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNaturalhourIcon],svg[arcticons-naturalhour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v5.508m-14.944.534l3.894 3.895m26.538-3.345l-3.896 3.894"></svg:path><svg:circle cx="23.999" cy="24" r="15.991" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.008V24m15.993 0H8.008M2.5 24h5.508m31.977 0H45.5M12.958 35.568l-3.895 3.895m26.398-4.319l3.9 3.899m-15.362.949V45.5"></svg:path>`,
})
export class ArcticonsNaturalhourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
