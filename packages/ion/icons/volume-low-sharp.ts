import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionVolumeLowSharpIcon],svg[ion-volume-low-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m391.12 341.48l-28.6-14.36l7.18-14.3c9.49-18.9 14.3-38 14.3-56.82c0-19.36-4.66-37.92-14.25-56.73L362.48 185L391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18ZM189.65 176.1H96v159.8h93.65L320 440V72z"></svg:path>`,
})
export class IonVolumeLowSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
