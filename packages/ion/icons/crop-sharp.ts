import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCropSharpIcon],svg[ion-crop-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44z"></svg:path><svg:path fill="currentColor" d="M346 320h44V122H192v44h154z"></svg:path>`,
})
export class IonCropSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
