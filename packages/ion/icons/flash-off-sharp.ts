import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionFlashOffSharpIcon],svg[ion-flash-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m63.998 86.005l21.998-21.998L447.999 426.01l-21.998 21.998zM80 304h144l-32 192l108.18-129.82l-148.36-148.36zm352-96H288l32-192l-108.18 129.82l148.36 148.36z"></svg:path>`,
})
export class IonFlashOffSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
