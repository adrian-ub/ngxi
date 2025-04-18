import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAlertSharpIcon],svg[ion-alert-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32" d="m240 80l8 240h16l8-240zm0 320h32v32h-32z"></svg:path>`,
})
export class IonAlertSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
