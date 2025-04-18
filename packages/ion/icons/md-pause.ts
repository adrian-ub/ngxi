import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdPauseIcon],svg[ion-md-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 448h106.7V64H96v384zM309.3 64v384H416V64H309.3z" fill="currentColor"></svg:path>`,
})
export class IonMdPauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
