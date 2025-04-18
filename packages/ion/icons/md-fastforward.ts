import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdFastforwardIcon],svg[ion-md-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M480 256L262.4 110v292L480 256zM32 110v292l217.6-146L32 110z" fill="currentColor"></svg:path>`,
})
export class IonMdFastforwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
