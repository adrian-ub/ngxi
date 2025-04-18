import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCarteiraDigitalDeTransitoIcon],svg[arcticons-carteira-digital-de-transito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M18.691 31.238H5.494V14.514h17.897"></svg:path><svg:rect width="32.484" height="17.84" x="13.749" y="15.08" rx="2" ry="2" transform="rotate(-74.304 29.99 24)"></svg:rect><svg:path d="m35.314 38.031l-17.175-4.826"></svg:path><svg:circle cx="11.48" cy="20.233" r="2.334"></svg:circle><svg:path d="m13.229 21.777l.811.717a3.5 3.5 0 0 1 1.185 2.628v.525a.954.954 0 0 1-.953.953H8.689a.954.954 0 0 1-.954-.953v-.525a3.5 3.5 0 0 1 1.185-2.628l.812-.717"></svg:path><svg:rect width="12.789" height="4.002" x="17.55" y="21.082" rx=".6" ry=".6"></svg:rect><svg:path d="M18.691 25.084V26.6m10.508-1.516V26.6m-.561-5.518l-.719-2.153a1.51 1.51 0 0 0-1.43-1.03h-5.087c-.65 0-1.226.415-1.431 1.03l-.72 2.153"></svg:path></svg:g><svg:circle cx="28.449" cy="23.083" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.441" cy="23.083" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsCarteiraDigitalDeTransitoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
