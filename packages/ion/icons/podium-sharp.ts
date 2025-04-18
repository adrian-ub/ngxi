import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPodiumSharpIcon],svg[ion-podium-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"></svg:path>`,
})
export class IonPodiumSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
