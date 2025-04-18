import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNammaYatriIcon],svg[arcticons-namma-yatri-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.055 5.55l.048 14.402C7.055 16.057 13.897 5.566 23.45 5.5c9.553-.065 17.368 9.069 17.495 14.452m-.191 22.532V27.965c0 4.767-7.343 14.663-16.85 14.534c-9.506-.13-16.775-9.023-16.8-14.534"></svg:path>`,
})
export class ArcticonsNammaYatriIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
