import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionExitSharpIcon],svg[ion-exit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M335.69 272h-161v-32h161V92a12 12 0 0 0-12-12h-280a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h280a12 12 0 0 0 12-12Zm83.37 0l-64 64l22.63 22.63L480.31 256L377.69 153.37L355.06 176l64 64h-83.37v32z"></svg:path>`,
})
export class IonExitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
