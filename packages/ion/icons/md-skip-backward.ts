import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdSkipBackwardIcon],svg[ion-md-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M170.7 256L448 448V64L170.7 256z" fill="currentColor"></svg:path><svg:path d="M64 64h64v384H64z" fill="currentColor"></svg:path>`,
})
export class IonMdSkipBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
