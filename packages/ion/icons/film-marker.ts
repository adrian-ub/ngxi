import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionFilmMarkerIcon],svg[ion-film-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448.4 208h-344l341.2-68c8.5-1.6 14-9.7 12.4-18.1l-8.9-45.4c-1.6-8.4-9.8-13.8-18.3-12.2L60.7 137.9c-8.5 1.6-14 9.7-12.4 18l8.9 45.4c.6 2.8 2.1 5.2 3.9 7.2-7.4 1.2-13.1 7.2-13.1 14.9v209.2c0 8.5 7 15.4 15.6 15.4h384.8c8.6 0 15.6-6.9 15.6-15.4V223.4c0-8.5-7-15.4-15.6-15.4zM305 402.4l-50.7-36.3-50.7 36.3 19.5-58.4-50.8-36H235l19.2-58.4 19.3 58.4h62.7l-50.8 36 19.6 58.4z" fill="currentColor"></svg:path>`,
})
export class IonFilmMarkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
