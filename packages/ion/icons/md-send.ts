import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdSendIcon],svg[ion-md-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 448l416-192L48 64v149.333L346 256 48 298.667z" fill="currentColor"></svg:path>`,
})
export class IonMdSendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
