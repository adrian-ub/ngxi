import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdVolumeMuteIcon],svg[ion-md-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z" fill="currentColor"></svg:path>`,
})
export class IonMdVolumeMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
