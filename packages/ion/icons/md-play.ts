import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdPlayIcon],svg[ion-md-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 52v408l320-204L96 52z" fill="currentColor"></svg:path>`,
})
export class IonMdPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
