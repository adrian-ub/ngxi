import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionDownloadSharpIcon],svg[ion-download-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272 160v147.37l64-64L358.63 266L256 368.63L153.37 266L176 243.37l64 64V160H92a12 12 0 0 0-12 12v296a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V172a12 12 0 0 0-12-12ZM240 32h32v128h-32z"></svg:path>`,
})
export class IonDownloadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
