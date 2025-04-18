import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosBrowsersOutlineIcon],svg[ion-ios-browsers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 144v304h303.9V144H64zm287.9 288H80V160h271.9v272z" fill="currentColor"></svg:path><svg:path d="M448 64H144v64h16V80h272v272h-48v16h64z" fill="currentColor"></svg:path>`,
})
export class IonIosBrowsersOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
